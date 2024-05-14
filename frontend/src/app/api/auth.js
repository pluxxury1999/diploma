import axios from "axios";

const registerUrl = process.env.NEXT_PUBLIC_REG_URL;
const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;

const registerUser = async (data) => {
    const response = axios.post(registerUrl, {
        username: data.username,
        email: data.email,
        password: data.password,
    }).catch((error) => {
            return {
                status:error.response.status,
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
                status:error.response.status,
                message: error.message,
            };
        });
    return response;
};

export { registerUser, loginUser };
