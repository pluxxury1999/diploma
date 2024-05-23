import axios from "axios";
import { getJwtFromCookie } from "../utils/cookies";
import { getRandomNum } from "../utils/randomNum";
import { shuffle } from "../utils/arrayShuffle";
import { config } from "../utils/fetchHeaders";

const gamemodeUrl = process.env.NEXT_PUBLIC_GAMEMODE_URL;
const wordsUrl = process.env.NEXT_PUBLIC_WORDS_URL;

const getGamemodes = async () => {
    const response = await axios.get(gamemodeUrl, config()).catch((error) => {
        return {
            status: error.response.status,
            message: error.message,
        };
    });
    return response;
};

const getPageCount = async () => {
    const response = await axios.get(wordsUrl, config()).catch((error) => {
        return {
            status: error.response.status,
            message: error.message,
        };
    });
    if (response.data.meta.pagination.total % 10 === 0) {
        return response.data.meta.pagination.pageCount;
    } else {
        return response.data.meta.pagination.pageCount - 1;
    }
};

const getRandomWords = async () => {
    const pageCount = await getPageCount();
    const pageNum = getRandomNum(1, pageCount);

    const response = await axios
        .get(wordsUrl + `${pageNum}`, config())
        .catch((error) => {
            return {
                status: error.response.status,
                message: error.message,
            };
        });
    return _transformRandomWords(response.data);
};

const _transformRandomWords = (data) => {
    const response = data.data.map((item) => {
        return {
            id: item.id,
            ua: item.attributes.translation,
            eng: item.attributes.word,
        };
    });

    // return response;
    return shuffle(response);
};

export { getGamemodes, getRandomWords };
