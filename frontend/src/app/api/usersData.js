import axios from "axios";
import { getJwtFromCookie } from "../utils/cookies";

const userDataUrl = process.env.NEXT_PUBLIC_USER_URL;

const getUserData = async () => {
    const token = await getJwtFromCookie();
    const response = await axios
        .get(userDataUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return {
                status: error.response.status,
                message: error.message,
            };
        });
    return _transformUserData(response);
};

const _transformUserData = (userData) => {
    if (userData.status === 401) {
        return null;
    }
    return {
        id: userData.data.id,
        username: userData.data.username,
        stats: userData.data.user_statistic === null ? null : {
            win: userData.data.user_statistic.win,
            lose: userData.data.user_statistic.lose,
            totalGames: userData.data.user_statistic.totalGames,
            winRate: userData.data.user_statistic.winRate,
            totalCorectWords: userData.data.user_statistic.totalCorectWords,
            totalWrongWords: userData.data.user_statistic.totalWrongWords,
        },
    };
};

export { getUserData };
