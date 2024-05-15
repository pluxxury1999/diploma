const setJwtToCookie = (jwt) => {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    document.cookie = `jwt=${jwt}; expires=30; path=/`;
};

const getJwtFromCookie = () => {
    const jwt = document.cookie.split("=")[1];
    return jwt;
};

export { setJwtToCookie, getJwtFromCookie };