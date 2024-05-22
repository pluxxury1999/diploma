import styles from "./selectedLetters.module.css";
import { useEffect, useState } from "react";
import shortid from "shortid";

const SelectedLetters = ({ letters, displayHandler, status }) => {
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        setDisplay(letters);
    }, [letters]);

    const items = display.map((letter) => {
        return (
            <div key={shortid.generate()} className={styles.item}>
                {letter}
            </div>
        );
    });

    return (
        <div className={styles.globalWrapper} style={{display: `${status === null ? null : 'none'}`}}>
            <h1>your answer</h1>
            <div
                className={styles.wrapper}
                style={{ width: `${display.length * 110}px` }}
            >
                {display.length > 0 ? items : null}
            </div>
        </div>
    );
};

export default SelectedLetters;
