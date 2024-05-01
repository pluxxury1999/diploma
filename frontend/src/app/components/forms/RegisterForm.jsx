"use client";

import styles from "./forms.module.css";

const RegisterForm = () => {
    const formHandler = (e) => {
        e.preventDefault();
    };

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Registration</h1>
            <form className={styles.form} onSubmit={formHandler}>
                <label htmlFor="email">E-mail</label>
                <input
                    className={styles.input}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                />
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
                <input
                    className={styles.input}
                    type="submit"
                    value="Register now"
                />
            </form>
            <div className={styles.registerBlock}>
                <p>
                Already have an account ?{" "}
                    <a className={styles.registerLink} href="/login">
                        Sign in
                    </a>
                </p>
            </div>
        </section>
    );
};

export default RegisterForm;
