import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({
    currentValue,
    maxValue,
    title,
    width = 100,
    negative = false,
}) => {
    let percentage = (currentValue / maxValue) * 100;

    let style = {
        textAlign: "center",
        marginTop: "10px",
    };

    if (isNaN(percentage)) {
        percentage = 0;
    }

    if (typeof title === "number") {
        style = {
            textAlign: "center",
            marginTop: "3px",
        };
    }

    const sucess = `rgb(78, 187, 115)`;
    const fail = `rgb(255, 90, 95)`;

    return (
        <div style={{ width: `${width}px`, margin: "0 auto" }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage.toFixed(2)}%`}
                styles={buildStyles({
                    textSize: "18px",
                    pathColor: negative ? fail : sucess,
                    textColor: "#000",
                    trailColor: "#d6d6d6",
                })}
            />
            <div style={style}>{title}</div>
        </div>
    );
};

export default ProgressBar;
