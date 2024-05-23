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
    };
};

export { getStatsId, updateUserStats };
