import axios from "axios";
import { getJwtFromCookie } from "../utils/cookies";

const userDataUrl = process.env.NEXT_PUBLIC_USER_URL;

const getUserData = async () => {
    const token = getJwtFromCookie();
    const response = await axios
        .get(userDataUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .catch((error) => {
            return {
                status: error.response.status,
                message: error.message,
            };
        });
    return response;
};

export { getUserData };
