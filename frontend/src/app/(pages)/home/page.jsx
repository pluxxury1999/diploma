"use client";

import styles from "./home.module.css";

import { checkUserAccess } from "@/app/api/auth";
import { getJwtFromCookie } from "@/app/utils/cookies";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Spinner from "@/app/components/spinner/Spinner";

const Home = () => {
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        checkUserAccess(getJwtFromCookie()) ? null : router.push("/login");
        setLoading(false);
    }, []);

    return (
        <main className={styles.main}>
            {loading ? <Spinner /> : <h1>Home Page</h1>}
        </main>
    );
};

export default Home;
