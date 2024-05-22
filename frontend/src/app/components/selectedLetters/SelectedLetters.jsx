import styles from "./selectedLetters.module.css";
import shortid from "shortid";

import { useEffect, useState } from "react";
import { faCheck, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectedLetters = ({ letters, displayHandler, resetHandler, status }) => {
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        setDisplay(letters);
    }, [letters]);

    const items = () =>
        display.map((letter) => {
            return (
                <div key={shortid.generate()} className={styles.item}>
                    {letter}
                </div>
            );
        });

    return (
        <div
            className={styles.globalWrapper}
            style={{ display: `${status === null ? null : "none"}` }}
        >
            <h2 className={styles.title}>Your answer:</h2>
            <div
                className={styles.wrapper}
                style={{ width: `${display?.length * 110}px` }}
            >
                {display?.length > 0 ? items() : null}
            </div>
            <div
                className={styles.btn}
                onClick={() => {
                    displayHandler([]);
                    resetHandler(true);
                }}
            >
                <FontAwesomeIcon icon={faUndo} className={styles.icon} />
            </div>
        </div>
    );
};

export default SelectedLetters;
