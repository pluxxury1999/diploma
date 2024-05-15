const setJwtToCookie = (jwt) => {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    document.cookie = `jwt=${jwt}; expires=30; path=/`;
};

const getJwtFromCookie = () => {
    try {
        const jwt = document.cookie.split('; ').find(cookie => cookie.startsWith('jwt=')).split('=')[1];
        console.log(jwt);
        return jwt;
    } catch (error) {
        return error.message;
    }
};

export { setJwtToCookie, getJwtFromCookie };
