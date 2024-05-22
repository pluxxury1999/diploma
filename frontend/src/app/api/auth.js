import axios from "axios";

import { deleteCookie, getJwtFromCookie } from "@/app/utils/cookies";
import { getUserData } from "./usersData";

const registerUrl = process.env.NEXT_PUBLIC_REG_URL;
const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;
const checkJwtUrl = process.env.NEXT_PUBLIC_CHECK_JWT;
const statsTableUrl = process.env.NEXT_PUBLIC_STATISTIC_URL;

const registerUser = async (data) => {
    const response = axios
        .post(registerUrl, {
            username: data.username,
            email: data.email,
            password: data.password,
        })
        .catch((error) => {
            return {
                status: error.response.status,
                message: error.message,
            };
        });
    return await response;
};

const loginUser = async (data) => {
    const response = axios
        .post(loginUrl, {
            identifier: data.identifier,
            password: data.password,
        })
        .catch((error) => {
            return {
                status: error.response.status,
                message: error.message,
            };
        });
    return await response;
};

const createStatsTable = async () => {
    const token = await getJwtFromCookie();
    const userData = await getUserData();

    const data = {
        data: {
            user: userData.data.id,
        },
    };

    if (userData.data.user_statistic === null) {
        const response = await axios
            .post(statsTableUrl, data, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((error) => {
                return {
                    status: error.response.status,
                    message: error.message,
                };
            });

        return response;
    }
};

const checkUserAccess = async () => {
    const token = getJwtFromCookie();
    await axios
        .get(checkJwtUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            if (res.status === 200) {
                return true;
            }
        })
        .catch(() => {
            deleteCookie();
            window.location.href = "/login";
            return false;
        });
};

export { registerUser, loginUser, checkUserAccess, createStatsTable };
