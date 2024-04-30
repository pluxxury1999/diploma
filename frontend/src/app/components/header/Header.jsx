import logo from "@/../public/logo.png";

import Image from "next/image";

const Header = () => {
    return (
        <header>
            <h1>Header</h1>
            <Image src={logo} alt="Logo" width={250}/>
        </header>
    )
}

export default Header;