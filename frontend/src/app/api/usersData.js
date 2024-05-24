import axios from "axios";
import { config } from "../utils/fetchHeaders";

const userDataUrl = process.env.NEXT_PUBLIC_USER_URL;
const topUsersUrl = process.env.NEXT_PUBLIC_STATISTIC_URL;
// SINGLE USER DATA

const getUserData = async () => {
    const response = await axios
        .get(userDataUrl, config())
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
        stats:
            userData.data.user_statistic === null
                ? "No data available"
                : {
                      win: userData.data.user_statistic.win,
                      lose: userData.data.user_statistic.lose,
                      totalGames: userData.data.user_statistic.totalGames,
                      winRate: userData.data.user_statistic.winRate,
                      totalCorectWords:
                          userData.data.user_statistic.totalCorectWords,
                      totalWrongWords:
                          userData.data.user_statistic.totalWrongWords,
                        totalWords: userData.data.user_statistic.totalWords,
                        rating: userData.data.user_statistic.rating,
                  },
    };
};

// GET TOP 10 USERS

const getTopUsers = async () => {
    const response = await axios.get(topUsersUrl, config()).then((response) => {
        if (response.status === 200) {
            return response.data.data;
        } else {
            return {
                status: response.status,
                message: response.message,
            };
        }
    });
    return await _transformTopUsers(response);
};

const _transformTopUsers = (topUsers) => {
    return topUsers.map((user) => {
        return {
            username: user.attributes.user.data.attributes.username,
            stats: {
                win: user.attributes.win,
                lose: user.attributes.lose,
                totalGames: user.attributes.totalGames,
                winRate: user.attributes.winRate,
                totalCorectWords: user.attributes.totalCorectWords,
                totalWrongWords: user.attributes.totalWrongWords,
                totalWords: user.attributes.totalWords,
                rating: user.attributes.rating,
            }
        }
    });
};

export { getUserData, getTopUsers };
