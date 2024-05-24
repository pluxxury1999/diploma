"use client";

import { getUserData } from "@/app/api/usersData";
import { checkUserAccess } from "@/app/api/auth";

import { useState, useEffect } from "react";

import styles from "./profile.module.css";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Spinner from "@/app/components/spinner/Spinner";
import ProgressBar from "@/app/components/progressBar/ProgressBar";
import LinkComponent from "@/app/components/linkComponent/LinkComponent";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUserAccess();
        getUserData().then((res) => {
            setUserData(res);
        });

        setLoading(false);
    }, []);

    if (userData !== null) {
        localStorage.setItem("username", JSON.stringify(userData.username));
    }

    return (
        <>
            <Header type={"profile"} />
            <main
                className="main"
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingBottom: "70px",
                }}
            >
                {!loading && userData !== null ? (
                    <>
                        <p className={styles.title}>
                            <span className={styles.nickname}>
                                {userData.username}
                            </span>{" "}
                            statistics
                        </p>
                        <p className={styles.title}>
                            Rating:{" "}
                            <span className={styles.nickname}>
                                {userData.stats.rating}
                            </span>
                        </p>
                        <div className={styles.progressContainer}>
                            <div className={styles.info}>
                                <h2 className={styles.infoTitle}>
                                    Game statistic
                                    <p className={styles.infoDescription}>
                                        Total Games: {userData.stats.totalGames}
                                    </p>
                                </h2>
                            </div>
                            <div className={styles.category}>
                                <ProgressBar
                                    maxValue={userData.stats.totalGames}
                                    currentValue={userData.stats.win}
                                    title={"Wins"}
                                    width={120}
                                />
                                <ProgressBar
                                    maxValue={userData.stats.totalGames}
                                    currentValue={userData.stats.lose}
                                    title={"Loses"}
                                    negative={true}
                                    width={120}
                                />
                            </div>
                        </div>
                        <div className={styles.progressContainer}>
                            <div className={styles.info}>
                                <h2 className={styles.infoTitle}>
                                    Words statistic
                                    <p className={styles.infoDescription}>
                                        Total Words: {userData.stats.totalWords}
                                    </p>
                                </h2>
                            </div>
                            <div className={styles.category}>
                                <ProgressBar
                                    maxValue={userData.stats.totalWords}
                                    currentValue={
                                        userData.stats.totalCorectWords
                                    }
                                    title={"Correct"}
                                    width={120}
                                />
                                <ProgressBar
                                    maxValue={userData.stats.totalWords}
                                    currentValue={
                                        userData.stats.totalWrongWords
                                    }
                                    title={"Wrong"}
                                    width={120}
                                    negative={true}
                                />
                            </div>
                        </div>
                        <LinkComponent
                            url={"./home"}
                            title={"Play!"}
                            width={280}
                            height={40}
                        />
                    </>
                ) : (
                    <Spinner />
                )}
            </main>
            <Footer />
        </>
    );
};

export default Profile;
