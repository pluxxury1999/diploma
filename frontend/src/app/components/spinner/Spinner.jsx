import Image from "next/image";
import spinner from "@/../public/spinner.svg";

const Spinner = () => {
    return (
        <>
            <Image
                priority={true}
                src={spinner}
                alt="spinner"
                width={200}
                height={200}
                style={{ marginBottom: "10%" }}
            />
        </>
    );
};

export default Spinner;
