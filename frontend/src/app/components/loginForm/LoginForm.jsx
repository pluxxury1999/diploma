const LoginForm = () => {
    return (
        <section>
            <form>
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </section>
    );
};

export default LoginForm;
