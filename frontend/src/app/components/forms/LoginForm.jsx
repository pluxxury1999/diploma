"use client";

import styles from "./forms.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/api/auth";
import { getUserData } from "@/app/api/usersData";
import { createStatsTable } from "@/app/api/auth";

import Link from "next/link";
import { setJwtToCookie, getJwtFromCookie } from "@/app/utils/cookies";
import Spinner from "../spinner/Spinner";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [userIdentifier, setUserIdentifier] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [error, setError] = useState(false);

    const router = useRouter();

    useEffect(() => {
        getJwtFromCookie() ? router.push("/home") : null;
    }, []);

    const formHandler = (
        event,
        identifier = userIdentifier,
        password = userPassword
    ) => {
        event.preventDefault();
        setLoading(true);
        try {
            loginUser({ identifier, password }).then((res) => {
                if (res.status === 200) {
                    setJwtToCookie(res.data.jwt);
                    createStatsTable();
                    router.push("/home");
                } else {
                    setError(true);
                }
                setLoading(false);
            });
        } catch (error) {
            console.log(error.massage);
        }
    };

    const usernameValidation = userIdentifier === null && !userIdentifier ? true : false;
    const passwordValidation = !userPassword ? true : false;

    const activateButton = !usernameValidation && !passwordValidation;

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
                            disabled= {!activateButton}
                            type="submit"
                            value="Login"
                        />
                    </form>
                    {!error ? null : (
                        <div className={styles.errorBlock}>
                            <p>Ivalid credentials</p>
                        </div>
                    )}
                    <div className={styles.registerBlock}>
                        <p>
                            Don&apos;t have an account ?{" "}
                            <Link
                                className={styles.registerLink}
                                href="/registration"
                            >
                                Register here
                            </Link>
                        </p>
                    </div>
                </>
            )}
        </section>
    );
};

export default LoginForm;
