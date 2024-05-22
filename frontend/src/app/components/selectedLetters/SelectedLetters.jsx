import styles from './selectedLetters.module.css';
import { useEffect, useState } from 'react';
import shortid from "shortid";

const SelectedLetters = ( props ) => {
    const [selectedLetters, setSelectedLetters] = useState([]);
    
    const clickHandler = (letter) => {
        setSelectedLetters((selectedLetters) => [...selectedLetters, letter]);
    }


    return (
        <>
        <button onClick={() => {clickHandler("A")}}>click</button>
        <h1>your answer</h1>
        <div className={styles.wrapper} style={{ width: `${selectedLetters.length * 110}px`}} >
            {selectedLetters.map((letter) => {
                return (
                    <div key={shortid.generate()} className={styles.item}>
                        {letter}
                    </div>
                )
            })}
        </div>
        </>
    )
};

export default SelectedLetters;