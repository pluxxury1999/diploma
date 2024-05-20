import axios from "axios";
import { getJwtFromCookie } from "../utils/cookies";

const gamemodeUrl = process.env.NEXT_PUBLIC_GAMEMODE_URL;

const getGamemodes = async () => {
    const token = getJwtFromCookie();
    const response = await axios
        .get(gamemodeUrl, {
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

export { getGamemodes };