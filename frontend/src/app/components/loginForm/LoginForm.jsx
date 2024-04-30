"use client";

import styles from "./loginForm.module.css";

const LoginForm = () => {
    const formHandler = (e) => {
        e.preventDefault();
    };

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.form} onSubmit={formHandler}>
                <label htmlFor="username">Username</label>
                <input
                    className={styles.input}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                />
                <label htmlFor="password">Password</label>
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                />
                <input className={styles.input} type="submit" value="Login" />
            </form>
            <div className={styles.registerBlock}>
                <p>
                    Don't have an account ?{" "}
                    <a className={styles.registerLink} href="/registration">
                        Register here
                    </a>
                </p>
            </div>
        </section>
    );
};

export default LoginForm;
