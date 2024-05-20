import style from "./gamemodeCard.module.css";

import LinkComponent from "../linkComponent/LinkComponent";

const GamemodeCard = ({ title, description, list, url }) => {
    const listElements = list.map((rule, index) => {
        return <li key={index}>{rule.content}</li>;
    });

    return (
        <div className={style.cardWrapper}>
            <h1 className={style.title}>{title}</h1>
            <div>
                <h1>Description</h1>
                <p>{description}</p>
            </div>
            <div>
                <h1>Rules</h1>
                <ul>{listElements}</ul>
            </div>
            <LinkComponent url={url} title="Play" width="250" />
        </div>
    );
};

export default GamemodeCard;
