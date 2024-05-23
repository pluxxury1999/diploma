"use client";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import { useEffect, useState } from "react";
import { checkUserAccess } from "@/app/api/auth";
import Spinner from "@/app/components/spinner/Spinner";

const EngToUa = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUserAccess();
        setLoading(false);
    }, []);

    return (
        <>
            <Header type="inGame"/>
            {loading ? (
                <Spinner />
            ) : (
                <main className="main">
                    <h1 style={{ fontSize: "34px", marginBottom: "5%" }}>
                        In develop
                    </h1>
                </main>
            )}
            <Footer />
        </>
    );
};

export default EngToUa;
