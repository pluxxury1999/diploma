"use client";

import {checkUserAccess} from "@/app/api/auth";
import {getJwtFromCookie} from "@/app/utils/cookies";

const Home = () => {

    checkUserAccess(getJwtFromCookie());

    return (
        <main>
            home page
        </main>
    );
};

export default Home;