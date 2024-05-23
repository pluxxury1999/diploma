import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ currentValue, maxValue, title, negative = false}) => {

    let percentage = (currentValue / maxValue) * 100;

    if (isNaN(percentage)) {
        percentage = 0;
    }

    const sucess = `rgb(78, 187, 115)`;
    const fail = `rgb(255, 90, 95)`;

    return (
        <div style={{ width: "100px" }}>
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
            <div style={{ textAlign: "center", marginTop: "10px" }}>
                {title}
            </div>
        </div>
    );
};

export default ProgressBar;
