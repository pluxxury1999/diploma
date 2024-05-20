import style from "./gamemodeCard.module.css";

import LinkComponent from "../linkComponent/LinkComponent";

const GamemodeCard = (props) => {
    return (
        <div className={style.cardWrapper}>
            <h1 className={style.title}>Title</h1>
            <h1>Description</h1>
            <h1>Rules</h1>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
            <LinkComponent url="#" title="Play" width="250"/>
        </div>
    )
};

export default GamemodeCard;