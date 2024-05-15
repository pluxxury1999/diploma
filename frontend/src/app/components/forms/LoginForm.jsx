"use client";

import styles from "./forms.module.css";
import { useState } from "react";
import { loginUser } from "@/app/api/auth";
import Spinner from "../spinner/Spinner";
import { setJwtToCookie } from "@/app/utils/cookies";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [userIdentifier, setUserIdentifier] = useState(null);
    const [userPassword, setUserPassword] = useState(null);

    const formHandler = (
        event,
        identifier = userIdentifier,
        password = userPassword
    ) => {
        event.preventDefault();
        setLoading(true);
        try {
            loginUser({ identifier, password }).then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    setJwtToCookie(res.data.jwt);
                    window.location.href = "/home";
                } else {
                    console.log(res.message);
                }
                setLoading(false);
            });
        } catch (error) {
            console.log(error.massage);
        }
    };

    return (
        <section className={styles.wrapper}>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <h1 className={styles.title}>Login</h1>
                    <form className={styles.form} onSubmit={formHandler}>
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => setUserIdentifier(e.target.value)}
                            className={styles.input}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setUserPassword(e.target.value)}
                            className={styles.input}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        <input
                            className={styles.input}
                            type="submit"
                            value="Login"
                        />
                    </form>
                    <div className={styles.registerBlock}>
                        <p>
                            Don't have an account ?{" "}
                            <a
                                className={styles.registerLink}
                                href="/registration"
                            >
                                Register here
                            </a>
                        </p>
                    </div>
                </>
            )}
        </section>
    );
};

export default LoginForm;
