const BgLetter = ({ letter, size, top, left, duration, iterationCount = 'infinite', rotateAngle = 0 }) => {
    const animationName = `wobble-${Math.random().toString(36).substring(2, 15)}`;

    const wobbleKeyframes = `
        @keyframes ${animationName} {
            25% {
                transform: rotate(${rotateAngle}deg);
            }
            50% {
                transform: rotate(${parseInt(rotateAngle, 10) + 40}deg);
            }
            100% {
                transform: rotate(${rotateAngle}deg);
            }
        }
    `;

    const style = {
        fontSize: `${size}px`,
        color: "#000",
        position: "absolute",
        zIndex: -1,
        opacity: 1,
        top: `${top}px`,
        left: `${left}px`,
        transform: `rotate(${rotateAngle}deg)`,
        animation: `${animationName} ${duration} ${iterationCount}`
    };

    return (
        <>
            <style>{wobbleKeyframes}</style>
            <span style={style}>{letter}</span>
        </>
    );
};

export default BgLetter;
