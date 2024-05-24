"use client";

import styles from "./leaderTable.module.css";

import ProgressBar from "@/app/components/progressBar/ProgressBar";

import { useEffect, useState } from "react";
import { checkUserAccess } from "@/app/api/auth";

import shortid from "shortid";

const LeaderTable = ({ users }) => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        checkUserAccess();
        setUsername(localStorage.getItem("username").slice(1, -1));
    }, [users]);

    const items = users.map((user, index) => {
        let userStyle = {};

        if (user.username === username) {
            userStyle = {
                // boxShadow: "0px 0px 6px 0px rgba(255, 239, 161, 0.884)",
                borderColor: "rgba(250, 198, 120, 0.3)",
                background:
                    "linear-gradient(to top, rgba(250, 198, 120, 0.2), rgba(255, 239, 161, 0))",
            };
        }

        return (
            <div
                key={shortid.generate()}
                className={styles.elemWrapper}
                style={userStyle}
            >
                <p>{`${++index}. ${user.username}`}</p>
                <p>{user.stats.rating}</p>
                <ProgressBar
                    maxValue={user.stats.totalGames}
                    currentValue={user.stats.win}
                    width={90}
                    title={"Winrate"}
                />
                <ProgressBar
                    maxValue={user.stats.totalWords}
                    currentValue={user.stats.totalCorectWords}
                    width={90}
                    title={"Correct"}
                />
            </div>
        );
    });

    return (
        <>
            <>
                <h2 className={styles.tableTitle}>Leaderboard</h2>
            </>
            {users.length === 0 ? null : (
                <div className={styles.container}>
                    {items.length === 0 ? null : items}
                </div>
            )}
        </>
    );
};

export default LeaderTable;
