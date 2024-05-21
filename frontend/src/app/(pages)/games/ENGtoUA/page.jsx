"use client";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

import { useState } from "react";

const EngToUa = () => {
    const [index, setIndex] = useState(0);
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return (
        <>
            <Header />
            <main className="main">
                {arr[index]}
                <button onClick={() => setIndex(index + 1)}>Next</button>
            </main>
            <Footer />
        </>
    )
}

export default EngToUa;