import axios from "axios";

import { deleteCookie } from "@/app/utils/cookies";

const registerUrl = process.env.NEXT_PUBLIC_REG_URL;
const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;
const checkJwtUrl = process.env.NEXT_PUBLIC_CHECK_JWT;

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
    return response;
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
    return response;
};

const checkUserAccess = (token) => {
    const response = axios
        .get(checkJwtUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .catch(() => {
            deleteCookie();
            window.location.href = "/login";
        });
    return response;
};

export { registerUser, loginUser, checkUserAccess };
