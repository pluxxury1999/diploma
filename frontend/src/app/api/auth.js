import axios from "axios";

const registerUrl = process.env.NEXT_PUBLIC_REG_URL;

const registerUser = async (data) => {
    const response = axios.post(registerUrl, {
        username: data.username,
        email: data.email,
        password: data.password,
    });
    return response;
};

const loginUser = async (data) => {
    const response = axios.post(loginUrl, {
        identifier: data.identifier,
        password: data.password,
    });
    return response;
};

// const registerUser = async (data) => {
//     const response = await fetch(registerUrl, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             username: data.username,
//             email: data.email,
//             password: data.password,
//         })
//     });
//     return response;
// };

export { registerUser };
