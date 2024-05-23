import logo from "@/../public/logo.svg";

import styles from "./header.module.css";

import Image from "next/image";

import LinkComponent from "../linkComponent/LinkComponent";
import LogoutBtn from "../logoutButton/LogoutBtn";

import { deleteCookie } from "@/app/utils/cookies";

const Header = ({ type }) => {
    let View = null;

    switch (type) {
        case "main":
            // git + logo + sign in + sign up
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
                    <Logo />
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
                    <Logo />
                    <div className={styles.linksWrapper}>
                        <LogoutBtn />
                    </div>
                </>
            );
            break;
        default:
            View = <Logo />;
    }

    return <header className={styles.header}>{View}</header>;
};

const Logo = () => {
    return (
        <div className={styles.logoWrapper}>
            <Image
                style={{ pointerEvents: "none" }}
                src={logo}
                alt="Logo"
                height={50}
                priority={true}
            />
        </div>
    );
};

export default Header;
