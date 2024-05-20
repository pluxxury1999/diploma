"use client";

import { getUserData } from "@/app/api/usersData";
import { checkUserAccess } from "@/app/api/auth";

import { useState, useEffect } from "react";

import Spinner from "@/app/components/spinner/Spinner";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUserAccess();
        getUserData().then((res) => {
            setUserData(res.data);
        });
        setLoading(false);
    }, []);

    return (
        <section>
            {!loading && userData !== null ? (
                <>
                    <h1>{userData.username}</h1>
                </>
            ) : (
                <Spinner />
            )}
        </section>
    );
};

export default Profile;
