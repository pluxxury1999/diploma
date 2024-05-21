"use client";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import { useEffect } from "react";
import { getRandomWords } from "@/app/api/getGameData";

const UaToEng = () => {
    useEffect(() => {
        getRandomWords().then((response) => {
            console.log(response);
        });
    }, []);

    return (
        <>
            <Header />
            <main>
                <h1>UA to ENG</h1>
            </main>
            <Footer />
        </>
    );
};

export default UaToEng;
