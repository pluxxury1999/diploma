import logo from "@/../public/logo.svg";

import styles from "./header.module.css";

import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <Image
                    style={{ pointerEvents: "none" }}
                    src={logo}
                    alt="Logo"
                    height={50}
                />
            </div>
        </header>
    );
};

export default Header;
