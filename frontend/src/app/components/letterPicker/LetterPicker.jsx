import styles from "./letterPicker.module.css";

import { useEffect, useState } from "react";
import shortid from "shortid";

import { getRandomNum } from "@/app/utils/randomNum";
import { shuffle } from "@/app/utils/arrayShuffle";

import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LetterPicker = ({ currentWord, selectHandler, displayHandler, status}) => {
    const [choise, setChoise] = useState([]);
    const [availableLetters, setAvailableLetters] = useState([]);

    const clickHandler = (letter) => {
        setChoise((choise) => [...choise, letter]);
        displayHandler((choise) => [...choise, letter]);
    };

    useEffect(() => {
        const letters = currentWord.split("");
        const _maxLetters = 10;
        let initialLetters = letters.map((letter) => (
            <div
                onClick={(e) => clickHandler(e.target.textContent)}
                key={shortid.generate()}
                className={styles.item}
            >
                {letter.toUpperCase()}
            </div>
        ));

        for (let i = 0; i < _maxLetters - letters.length; i++) {
            const randomLetter = String.fromCharCode(getRandomNum(65, 90));
            initialLetters.push(
                <div
                    onClick={(e) => clickHandler(e.target.textContent)}
                    key={shortid.generate()}
                    className={styles.item}
                >
                    {randomLetter}
                </div>
            );
        }

        setAvailableLetters(shuffle(initialLetters));
        console.log(choise);
    }, [currentWord]);

    return (
        <div className={styles.controlsWrapper} style={{display: `${status === null ? null : 'none'}`}}>
            <button
                className={styles.discard}
                onClick={() => {
                    selectHandler("");
                    setChoise([]);
                }}
            >
                <FontAwesomeIcon className={styles.icon} icon={faTimes} />
            </button>

            <div className={styles.wrapper}>{availableLetters}</div>

            <button
                className={styles.approve}
                onClick={() => {
                    selectHandler(choise.join("").toLowerCase());
                    setChoise([]);
                }}
            >
                <FontAwesomeIcon className={styles.icon} icon={faCheck} />
            </button>
        </div>
    );
};

export default LetterPicker;