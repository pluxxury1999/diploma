"use client";

import styles from "./logoutBtn.module.css";

import { deleteCookie } from "@/app/utils/cookies";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
    const router = useRouter();

    return (
        <button
            className={styles.btn}
            onClick={() => {
                deleteCookie();
                router.push("/");
            }}
        >
            Log out
        </button>
    );
};

export default LogoutBtn;
