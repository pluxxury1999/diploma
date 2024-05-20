"use client";

import styles from "./home.module.css";

import { checkUserAccess } from "@/app/api/auth";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { getGamemodes } from "@/app/api/getGameData";

import Spinner from "@/app/components/spinner/Spinner";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import GamemodeCard from "@/app/components/gamemodeCard/GamemodeCard";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [gamemodesData, setGamemodesData] = useState([]);

    const router = useRouter();

    useEffect(() => {
        if (checkUserAccess()) {
            setLoggedIn(true);
        } else {
            router.push("/login");
        }

        getGamemodes().then((response) => {
            if (response.status === 200) {
                setGamemodesData(response.data.data);
            } else {
                console.error(response.message);
            }
        });
        setLoading(false);
    }, []);

    const gamemodes = gamemodesData.map((gamemode, index) => {
        return (
            <GamemodeCard
                title={gamemode.attributes.title}
                description={gamemode.attributes.description}
                list={gamemode.attributes.list}
                url={gamemode.attributes.url}
                key={index}
            />
        );
    });

    return loading && !loggedIn ? (
        <Spinner />
    ) : (
        <>
            <Header type="auth" />
            <main className={styles.main}>{gamemodes}</main>
            <Footer />
        </>
    );
};

export default Home;
