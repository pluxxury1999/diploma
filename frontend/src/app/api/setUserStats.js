import axios from "axios";
import { getJwtFromCookie } from "../utils/cookies";
import { config } from "../utils/fetchHeaders";

const userUrl = process.env.NEXT_PUBLIC_USER_URL;
const statsUrl = process.env.NEXT_PUBLIC_STATISTIC_URL;

const getStatsId = async () => {
    const token = await getJwtFromCookie();
    const id = await axios
        .get(userUrl, config())
        .then((response) => {
            return response.data.user_statistic.id;
        })
        .catch((error) => {
            return error.message;
        });
    return {
        id,
        token,
    };
};

const clampFucntion = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
};

const calculateRating = (status, correct, wrong) => {
    let winScore= 4;
    let loseScore= 2;
    let rating = (correct * winScore) + (wrong * loseScore * -1);
    
    if (!status) { 
        winScore = 2;
        loseScore = 6;
        rating = (correct * winScore) + (wrong * loseScore * -1);
        return  clampFucntion(rating, -40, 0);
    }

    return rating;
};

const updateUserStats = async (status, correct, wrong) => {
    const { id, token } = await getStatsId();

    const currentData = await axios
        .get(`${statsUrl}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.message;
        });

    const oldData = _transformStats(currentData.data.attributes);

    const receivedRating = calculateRating(status, correct, wrong);
    const totalRating = oldData.rating + receivedRating;


    const newData = {
        data: {
            win: status ? 1 + oldData.win : oldData.win,
            lose: status ? oldData.lose : 1 + oldData.lose,
            totalGames: oldData.totalGames + 1,
            winRate: status
                ? (
                      ((oldData.win + 1) / (oldData.totalGames + 1)) *
                      100
                  ).toFixed(2)
                : ((oldData.win / (oldData.totalGames + 1)) * 100).toFixed(2),
            totalCorectWords: oldData.totalCorectWords + correct,
            totalWrongWords: oldData.totalWrongWords + wrong,
            totalWords: oldData.totalWords + correct + wrong,
            rating: totalRating > 0 ? totalRating : 1,
        },
    };

    const response = getStatsId().then(({ id, token }) => {
        const response = axios
            .put(`${statsUrl}/${id}`, newData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error.message;
            });
        return response;
    });
    return response;
};

const _transformStats = (data) => {
    return {
        win: data.win,
        lose: data.lose,
        totalGames: data.totalGames,
        winRate: data.winRate,
        totalCorectWords: data.totalCorectWords,
        totalWrongWords: data.totalWrongWords,
        totalWords: data.totalWords,
        rating: data.rating,
    };
};

export { getStatsId, updateUserStats, calculateRating };
