"use client";

import styles from "./forms.module.css";
import { useState } from "react";

const RegisterForm = () => {
    const formHandler = (e) => {
        e.preventDefault();
        console.log(1)
    };

    const [isEmail, setIsEmail] = useState(null);
    const [isUsername, setIsUsername] = useState(null);
    const [isPassword, setIsPassword] = useState(null);

    const validateEmail = (email) => {
        // Регулярное выражение для проверки email
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Проверка соответствия паттерну
        const result = pattern.test(email);
        result ? setIsEmail(email) : setIsEmail(false);
    };

    const validateUsername = (username) => {
        username.length >= 3 ? setIsUsername(username) : setIsUsername(false);
    };

    const validatePassword = (password) => {
        password.length >= 3 ? setIsPassword(password) : setIsPassword(false);
    };

    // Пример использования функции

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Registration</h1>
            <form className={styles.form} onSubmit={formHandler}>
                <label htmlFor="email">E-mail</label>
                <input
                    onChange={(e) => validateEmail(e.target.value)}
                    className={styles.input}
                    style={{ borderColor: isEmail !== false ? '#ccc' : 'red' }}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                />
                <label htmlFor="username">Username</label>
                <input
                    onChange={(e) => validateUsername(e.target.value)}
                    className={styles.input}
                    style={{ borderColor: isUsername !== false ? '#ccc' : 'red' }}
                    maxLength={15}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                />
                <label htmlFor="password">Password</label>
                <input
                    onChange={(e) => validatePassword(e.target.value)}
                    className={styles.input}
                    style={{ borderColor: isPassword !== false ? '#ccc' : 'red' }}
                    maxLength={20}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                />
                <input
                    disabled={!isEmail || !isUsername || !isPassword}
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
