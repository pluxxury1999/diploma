"use client";

import styles from "./leaderboard.module.css";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

import { checkUserAccess } from "@/app/api/auth";
import { getTopUsers } from "@/app/api/usersData";

import { useEffect, useState } from "react";
import Spinner from "@/app/components/spinner/Spinner";
import LeaderTable from "@/app/components/leaderTable/LeaderTable";

const Leaderboard = () => {
    const [loading, setLoading] = useState(true);
    const [top, setTop] = useState([]);

    useEffect(() => {
        checkUserAccess();
        getTopUsers().then((response) => {
            setTop(response);
            console.log(response);
        });
        setLoading(false);
    }, []);

    return (
        <>
            <Header type="inGame" />
            <main className="main" style={{flexDirection: "column", justifyContent: "center"}}>
                {loading && top.length === 0 ? <Spinner /> : <LeaderTable users={top}/>}
            </main>
            <Footer />
        </>
    );
};

export default Leaderboard;
