import shortid from "shortid";
import styles from "./gameResult.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { updateUserStats, calculateRating } from "@/app/api/setUserStats";

const GameResult = ({
    gameStatus,
    mistakes,
    correct,
    wrong,
    correctHandler,
    wrongHandler,
}) => {
    const [rating, setRating] = useState(null);
    const router = useRouter();

    useEffect(() => {
        updateUserStats(gameStatus, correct, wrong);
        setRating(calculateRating(gameStatus, correct, wrong));
        correctHandler([]);
        wrongHandler([]);
    }, []);

    return (
        <div
            className={styles.wrapper}
            style={{ backgroundColor: gameStatus ? "#4EBB73" : "#e7474d" }}
        >
            <h2 className={styles.title}>
                {gameStatus ? "You win!" : "You lose!"}
            </h2>
            <h2 className={styles.title}>
                {rating !== null ? `Rating: ${rating}` : null}
            </h2>
            <div className={styles.results}>
                <h3 className={styles.subTitle}>Mistakes:</h3>
                <div className={styles.listHeader}>
                    <span className={styles.item}>Your answer</span>
                    <span className={styles.item}>Correct</span>
                </div>
                <ul>
                    {mistakes.length > 0 ? (
                        mistakes.map((item) => (
                            <li
                                key={shortid.generate()}
                                className={styles.listItem}
                            >
                                <span className={styles.item}>
                                    {item.answer}
                                </span>
                                <span className={styles.arrow}>&#8594;</span>
                                <span className={styles.item}>
                                    {item.correct}
                                </span>
                            </li>
                        ))
                    ) : (
                        <li className={styles.listItem}>No mistakes</li>
                    )}
                </ul>
            </div>
            <div className={styles.controls}>
                <button
                    className={styles.btn}
                    onClick={() => window.location.reload()}
                >
                    Try again
                </button>
                <button
                    className={styles.btn}
                    onClick={() => router.push("/home")}
                >
                    HomePage
                </button>
            </div>
        </div>
    );
};

export default GameResult;
