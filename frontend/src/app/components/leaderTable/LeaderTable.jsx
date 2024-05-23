"use client";

import styles from "./leaderTable.module.css";

import ProgressBar from "@/app/components/progressBar/ProgressBar";

import { useEffect, useState } from "react";

import shortid from "shortid";

const LeaderTable = ({ users }) => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        setUsername(localStorage.getItem("username").slice(1, -1));
    }, []);

    console.log(username);

    const items = users.map((user) => {

        let userStyle = {}        

        if (user.username === username) {
            userStyle = {
                backgroundColor: "rgb(255, 250, 225)"
            }
        }

        return (
            <tr key={shortid.generate()} style={userStyle}>
                <td key={shortid.generate()} className={styles.textContent}>{user.username}</td>
                <td key={shortid.generate()} className={styles.textContent}>
                    {user.stats.totalGames}
                </td>
                <td key={shortid.generate()}>
                    <ProgressBar
                        currentValue={user.stats.win}
                        maxValue={user.stats.totalGames}
                        title={user.stats.win}
                        width={60}
                    />
                </td>
                <td key={shortid.generate()}>
                    <ProgressBar
                        currentValue={user.stats.lose}
                        maxValue={user.stats.totalGames}
                        title={user.stats.lose}
                        width={60}
                        negative={true}
                    />
                </td >
                <td key={shortid.generate()} className={styles.textContent}>
                    {user.stats.totalCorectWords +
                        user.stats.totalWrongWords}
                </td>
                <td key={shortid.generate()}>
                    <ProgressBar
                        currentValue={user.stats.totalCorectWords}
                        maxValue={
                            user.stats.totalCorectWords +
                            user.stats.totalWrongWords
                        }
                        title={user.stats.totalCorectWords}
                        width={60}
                    />
                </td>
                <td key={shortid.generate()}>
                    <ProgressBar
                        currentValue={user.stats.totalWrongWords}
                        maxValue={
                            user.stats.totalCorectWords +
                            user.stats.totalWrongWords
                        }
                        title={user.stats.totalWrongWords}
                        width={60}
                        negative={true}
                    />
                </td>
            </tr>
        );
    });

    return (
        <>
            <>
                <h2 className={styles.tableTitle}>Leaderboard</h2>
            </>
            {users.length === 0 ? null : (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Total games</th>
                            <th>Win</th>
                            <th>Lose</th>
                            <th>Total words</th>
                            <th>Correct</th>
                            <th>Wrong</th>
                        </tr>
                    </thead>
                    <tbody>
                        {username.length === 0 ? null : items}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default LeaderTable;
