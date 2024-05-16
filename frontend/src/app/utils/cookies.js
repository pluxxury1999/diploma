const setJwtToCookie = (jwt) => {
    document.cookie = `jwt=${jwt}; expires=30; path=/`;
};

const getJwtFromCookie = () => {
    
    if (document.cookie.length === 0) {
        return false;
    }

    try {
        const jwt = document.cookie.split('; ').find(cookie => cookie.startsWith('jwt=')).split('=')[1];
        console.log(jwt);
        return jwt;
    } catch (error) {
        return error.message;
    }
};

const deleteCookie = (name = "jwt") => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export { setJwtToCookie, getJwtFromCookie, deleteCookie };
