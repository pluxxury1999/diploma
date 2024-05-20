import Image from "next/image";
import spinner from "@/../public/spinner.svg";

const Spinner = () => {
    const style = {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
    };
    return (
        <div style={style}>
            <Image
                priority={true}
                src={spinner}
                alt="spinner"
                width={200}
                height={200}
                style={{ marginBottom: "10%", margin: "0 auto" }}
            />
        </div>
    );
};

export default Spinner;
