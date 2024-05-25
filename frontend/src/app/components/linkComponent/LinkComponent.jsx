import Link from "next/link";

import styles from "./linkComponent.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const LinkComponent = ({
    url,
    title,
    width = 40,
    height = 40,
    gitHub = false,
}) => {
    const style = {
        width: `${width}px`,
        height: `${height}px`,
        color: "#000",
    };
    return gitHub ? (
        <Link
            href="https://github.com/pluxxury1999/diploma"
            target="_blank"
            title="shitty code is here!"
        >
            <FontAwesomeIcon icon={faGithub} style={style}/>
        </Link>
    ) : (
        <div className={styles.btn} style={style}>
            <Link href={url} className={styles.link}>
                {title}
            </Link>
        </div>
    );
};

export default LinkComponent;
