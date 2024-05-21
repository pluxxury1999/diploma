"use client";

import styles from "./uaToEng.module.css";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Spinner from "@/app/components/spinner/Spinner";

import { useEffect, useState } from "react";
import { getRandomWords } from "@/app/api/getGameData";
import LetterPicker from "@/app/components/letterPicker/LetterPicker";

import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UaToEng = () => {
    const [words, setWords] = useState([]);
    const [started, setStarted] = useState(true);

    useEffect(() => {
        getRandomWords().then((response) => {
            setWords(response);
            console.log(response);
        });
    }, []);

    return (
        <>
            <Header />
            <main className="main" style={{ flexDirection: "column" }}>
                {!started ? (
                    <button
                        className={styles.btn}
                        onClick={() => setStarted(true)}
                    >
                        Start game
                    </button>
                ) : words.length === 0 ? (
                    <Spinner />
                ) : (
                    <View words={words} />
                )}
            </main>
            <Footer />
        </>
    );
};

const View = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[index].eng);


    const buttonEventHandler = () => {
        setIndex(index + 1);
        if (index < words.length - 1){setCurrentWord(words[index+1].eng);}
    }

    return (
        <>
            <div className={styles.wordWrapper}>
                {index <= words.length - 1 ? (
                    words[index].ua.toUpperCase()
                ) : (
                    <div>
                        Correct: {correct}, Incorrect: {incorrect}
                    </div>
                )}
            </div>
            <div className={styles.controlsWrapper}>
                <button
                    className={styles.discard}
                    disabled={index === words.length - 1}
                    onClick={() => {
                        buttonEventHandler();
                        setIncorrect(incorrect + 1);
                    }}
                >
                    <FontAwesomeIcon className={styles.icon} icon={faTimes} />
                </button>
                <LetterPicker currentWord={currentWord}/>
                <button
                    className={styles.approve}
                    disabled={index === words.length - 1}
                    onClick={() => {
                        buttonEventHandler();
                        setCorrect(correct + 1);
                    }}
                >
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                </button>
            </div>
        </>
    );
};

export default UaToEng;
