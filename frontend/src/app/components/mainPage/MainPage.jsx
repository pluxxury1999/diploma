import styles from "./mainPage.module.css";

import { getRandomNum as randomNum } from "@/app/utils/randomNum";

import BgLetter from "../bgLetter/BgLetter";
import Link from "next/link";

const MainPage = () => {

    // worked, but throw error in console
    // const height = window.innerHeight;
    // const width = window.innerWidth;

    const height = 911;
    const width = 1920;

    const generateBg = (count) => {
        const bgItems = [];
        for (let i = 0; i < count; i++) {
            bgItems.push(
                <BgLetter
                    key={i}
                    letter={String.fromCharCode(randomNum())}
                    size={randomNum(50, 150)}
                    top={randomNum(0, height - 150)}
                    left={
                        randomNum(0, 1)
                            ? randomNum(-50, 300)
                            : randomNum(width - 300, width + 50)
                    }
                    duration={`${randomNum(5, 10)}s`}
                    iterationCount="infinite"
                    rotateAngle={randomNum(-40, 40)}
                />
            );
        }
        return bgItems;
    };

    return (
        <main className={styles.main}>
            <section className={styles.contentBlock}>
                <h1 className={styles.title}>
                    Welcome to{" "}
                    <span className={styles.titleLogo}>WordsMatch</span>
                </h1>
                <p className={styles.subTitle}>
                    this application was created to help you learn and improve
                    your language skills.
                </p>
                <p className={styles.motivation}>
                    Don't put off what you can do right now!
                </p>
                <div className={styles.btn}>
                    <Link className={styles.link} href="./registration">Start Now &#8594;</Link>
                </div>
            </section>
            {generateBg(30)}
        </main>
    );
};

export default MainPage;
