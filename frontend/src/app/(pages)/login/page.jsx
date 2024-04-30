import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

const LoginPage = () => {
    return (
        <>
            <Header />
            <main>
                <form action="">
                    <h1>Login</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </main>
            <Footer />
        </>
    );
};

export default LoginPage;
