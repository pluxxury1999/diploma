import { getJwtFromCookie } from './cookies';

const config = () => {
    const token = getJwtFromCookie();
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export { config };