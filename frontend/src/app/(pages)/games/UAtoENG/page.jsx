"use client";

import styles from "./uaToEng.module.css";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Spinner from "@/app/components/spinner/Spinner";

import { useEffect, useState } from "react";
import { getRandomWords } from "@/app/api/getGameData";
import LetterPicker from "@/app/components/letterPicker/LetterPicker";
import SelectedLetters from "@/app/components/selectedLetters/SelectedLetters";
import GameResult from "@/app/components/gameResult/GameResult";
import { checkUserAccess } from "@/app/api/auth";

const UaToEng = () => {
    const [words, setWords] = useState([]);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        checkUserAccess();
        getRandomWords().then((response) => {
            setWords(response);
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
    const [currentWord, setCurrentWord] = useState(null);
    const [selected, setSelected] = useState(null);
    const [display, setDisplay] = useState([]);
    const [gameStatus, setGameStatus] = useState(null);
    const [reseted, setReseted] = useState(false);
    const [mistakes, setMistakes] = useState([]);

    useEffect(() => {
        if (index !== words.length) {
            setCurrentWord(words[index].eng);
        }
    }, [index, words]);

    useEffect(() => {
        if (index === words.length) {
            if (correct >= 8) {
                setGameStatus(true);
            } else {
                setGameStatus(false);
            }
            return;
        }

        if (selected === words[index].eng) {
            setCorrect(correct + 1);
            setNextWord();
        }

        if (selected !== words[index].eng && selected !== null) {
            setIncorrect(incorrect + 1);
            setMistakes([
                ...mistakes,
                {
                    answer: selected ? selected : "skipped",
                    correct: words[index].eng,
                },
            ]);
            setNextWord();
        }

        setSelected(null);
    }, [selected]);

    const setNextWord = () => {
        setIndex(index + 1);
        if (index < words.length - 1) {
            setCurrentWord(words[index + 1].eng);
        }
    };

    return (
        <>
            <div className={styles.wordWrapper}>
                {index <= words.length - 1 ? (
                    words[index].ua.toUpperCase()
                ) : gameStatus !== null ? <GameResult
                gameStatus={gameStatus}
                mistakes={mistakes}
                correct={correct}
                wrong={incorrect}
                correctHandler={setCorrect}
                wrongHandler={setIncorrect}
            /> : null}
            </div>
            {currentWord ? (
                <>
                    <SelectedLetters
                        letters={display}
                        displayHandler={setDisplay}
                        selectHandler={setSelected}
                        resetHandler={setReseted}
                        status={gameStatus}
                    />
                    <LetterPicker
                        currentWord={currentWord}
                        selectHandler={setSelected}
                        displayHandler={setDisplay}
                        resetHandler={setReseted}
                        reseted={reseted}
                        status={gameStatus}
                    />
                </>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default UaToEng;
