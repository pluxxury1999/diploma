import styles from "./letterPicker.module.css";

import { useState } from "react";
import shortid from "shortid";

import { getRandomNum } from "@/app/utils/randomNum";
import { shuffle } from "@/app/utils/arrayShuffle";

import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LetterPicker = ({ currentWord, selectHandler }) => {
    const [choise, setChoise] = useState([]);

    const letters = currentWord.split("");

    const _maxLetters = 10;

    const clickHandler = (e) => {
        setChoise([...choise, e.target.textContent]);
    };

    const availableLetters = letters.map((letter) => {
        return (
            <div
                onClick={clickHandler}
                key={shortid.generate()}
                className={styles.item}
            >
                {letter.toUpperCase()}
            </div>
        );
    });

    for (let i = 0; i < _maxLetters - letters.length; i++) {
        const randomLetter = String.fromCharCode(getRandomNum(65, 90));
        availableLetters.push(
            <div
                onClick={clickHandler}
                key={shortid.generate()}
                className={styles.item}
            >
                {randomLetter}
            </div>
        );
    }

    return (
        <div className={styles.controlsWrapper}>
            <button className={styles.discard} onClick={() => {}}>
                <FontAwesomeIcon className={styles.icon} icon={faTimes} />
            </button>

            <div className={styles.wrapper}>{shuffle(availableLetters)}</div>
            <button className={styles.approve} onClick={() => {}}>
                <FontAwesomeIcon className={styles.icon} icon={faCheck} />
            </button>
        </div>
    );
};

export default LetterPicker;
