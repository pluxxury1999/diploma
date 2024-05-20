"use client";

import styles from "./home.module.css";

import { checkUserAccess } from "@/app/api/auth";
import { getJwtFromCookie } from "@/app/utils/cookies";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Spinner from "@/app/components/spinner/Spinner";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (checkUserAccess()) {
            setLoggedIn(true);
            setLoading(false);
        } else {
            router.push("/login");
        }
    }, []);

    return (loading && !loggedIn) ? (
        <Spinner />
    ) : (
        <>
            <Header type="auth" />
            <main className={styles.main}>
                <h1>Home Page</h1>
            </main>
            <Footer />
        </>
    );
};

export default Home;
