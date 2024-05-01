import axios from "axios";

const registerUrl = process.env.NEXT_PUBLIC_REG_URL;

const regsterUser = async (data) => {
    return await axios.post(registerUrl, {
        username: data.username,
        email: data.email,
        password: data.password,
    });
};

export { regsterUser };