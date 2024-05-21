"use client";

import styles from "./uaToEng.module.css";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Spinner from "@/app/components/spinner/Spinner";

import { useEffect, useState } from "react";
import { getRandomWords } from "@/app/api/getGameData";
import LetterPicker from "@/app/components/letterPicker/LetterPicker";

const UaToEng = () => {
    const [words, setWords] = useState([]);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        getRandomWords().then((response) => {
            setWords(response);
        });
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                {!started ? <button className={styles.btn} onClick={() => setStarted(true)}>Start game</button> : 
                    words.length === 0 ? <Spinner /> : <LetterPicker />}
            </main>
            <Footer />
        </>
    );
};

export default UaToEng;
