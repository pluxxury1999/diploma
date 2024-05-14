"use client";

import styles from "./forms.module.css";
import { useState } from "react";
import { registerUser } from "@/app/api/auth";
import Spinner from "../spinner/Spinner";

const RegisterForm = () => {
    const [isEmail, setIsEmail] = useState(null);
    const [isUsername, setIsUsername] = useState(null);
    const [isPassword, setIsPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [register, setRegister] = useState(null);

    const validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const result = pattern.test(email);
        result ? setIsEmail(email) : setIsEmail(false);
    };

    const lengthValidation = (value, length, setFunc) => {
        value.length >= length ? setFunc(value) : setFunc(false);
    }

    // const validateUsername = (username) => {
    //     username.length >= 3 ? setIsUsername(username) : setIsUsername(false);
    // };

    // const validatePassword = (password) => {
    //     password.length >= 3 ? setIsPassword(password) : setIsPassword(false);
    // };

    // Обробник форми

    const formHandler = (
        event,
        username = isUsername,
        email = isEmail,
        password = isPassword
    ) => {
        event.preventDefault();
        setLoading(true);
        registerUser({ username, email, password }).then((res) => {
            res.status === 200 ? setRegister(true) : setRegister(false);
            setLoading(false);
        });
    };

    return (
        <section className={styles.wrapper}>
            {!register ? (
                loading ? (
                    <Spinner />
                ) : (
                    <>
                        <h1 className={styles.title}>Registration</h1>
                        <form className={styles.form} onSubmit={formHandler}>
                            <label htmlFor="email">E-mail</label>
                            <input
                                onChange={(e) => validateEmail(e.target.value)}
                                className={styles.input}
                                style={{
                                    borderColor: isEmail !== false ? "#ccc" : "red",
                                }}
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Example@gmail.com"
                            />
                            <label htmlFor="username">Username</label>
                            <input
                                onChange={(e) => lengthValidation(e.target.value, 3, setIsUsername)}
                                className={styles.input}
                                style={{
                                    borderColor:
                                        isUsername !== false ? "#ccc" : "red",
                                }}
                                maxLength={15}
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                            />
                            <p className={styles.description}>min length 3</p>
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => lengthValidation(e.target.value, 8, setIsPassword)}
                                className={styles.input}
                                style={{
                                    borderColor:
                                        isPassword !== false ? "#ccc" : "red",
                                }}
                                maxLength={20}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                            <p className={styles.description}>min length 8</p>
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
                    </>
                )
            ) : (<div className={styles.successWrapper}>
                <p className={styles.successTitle}>Confirm your email to continue</p>
                <p className={styles.successSubTitle}>This page may be closed</p>
            </div>)}
        </section>
    );
};

export default RegisterForm;
