"use client";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Spinner from "@/app/components/spinner/Spinner";

import { useEffect, useState } from "react";
import { getRandomWords } from "@/app/api/getGameData";
import LetterPicker from "@/app/components/letterPicker/LetterPicker";

const UaToEng = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        getRandomWords().then((response) => {
            setWords(response);
        });
    }, []);

    return (
        <>
            <Header />
            <main>
                {words.length === 0 ? <Spinner /> : <p>words loaded</p>}
                <LetterPicker />
            </main>
            <Footer />
        </>
    );
};

export default UaToEng;
