"use client";

import logo from "@/../public/logo.svg";

import styles from "./header.module.css";

import Image from "next/image";

import LinkComponent from "../linkComponent/LinkComponent";
import LogoutBtn from "../logoutButton/LogoutBtn";

import { useRouter } from "next/navigation";

const Header = ({ type }) => {
    let View = null;

    switch (type) {
        case "main":
            View = (
                <>
                    <div className={styles.linksWrapper}>
                        <LinkComponent gitHub={true} />
                    </div>
                    <Logo />
                    <div className={styles.linksWrapper}>
                        <LinkComponent
                            url="./login"
                            title="Sign in"
                            width={90}
                            height={40}
                        />
                        <LinkComponent
                            url="./registration"
                            title="Sign up"
                            width={90}
                            height={40}
                        />
                    </div>
                </>
            );
            break;
        case "auth":
            View = (
                <>
                    <div className={styles.linksWrapper}>
                        <LinkComponent gitHub={true} />
                    </div>
                    <Logo homePage={true} />
                    <div className={styles.linksWrapper}>
                        <LinkComponent
                            url="./profile"
                            title="Profile"
                            width={90}
                            height={40}
                        />
                    </div>
                </>
            );
            break;
        case "profile":
            View = (
                <>
                    <div className={styles.linksWrapper}>
                        <LinkComponent gitHub={true} />
                    </div>
                    <Logo homePage={true} />
                    <div className={styles.linksWrapper}>
                        <LinkComponent 
                            url="./leaderboard"
                            title="Top 10"
                            width={90}
                            height={40} 
                        />
                        <LogoutBtn />
                    </div>
                </>
            );
            break;
        case "inGame":
            View = (
                <>
                    <div className={styles.linksWrapper}>
                        <LinkComponent gitHub={true} />
                    </div>
                    <Logo homePage={true} />
                    <div className={styles.linksWrapper}>
                        
                    </div>
                </>
            );
            break;
        default:
            View = <Logo />;
    }

    return <header className={styles.header}>{View}</header>;
};

const Logo = ({ homePage = false }) => {
    const router = useRouter();

    return homePage ? (
        <div className={styles.logoWrapper}>
            <div
                onClick={() => router.push("/home")}
                className={styles.homePage}
            >
                <Image
                    style={{ pointerEvents: "none" }}
                    src={logo}
                    alt="Logo"
                    height={50}
                    priority={true}
                />
            </div>
        </div>
    ) : (
        <div className={styles.logoWrapper}>
            <div onClick={() => router.push("/")} className={styles.homePage}>
                <Image
                    style={{ pointerEvents: "none" }}
                    src={logo}
                    alt="Logo"
                    height={50}
                    priority={true}
                />
            </div>
        </div>
    );
};

export default Header;
