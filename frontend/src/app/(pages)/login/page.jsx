import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import LoginForm from "@/app/components/loginForm/LoginForm";

const LoginPage = () => {
    return (
        <>
            <Header />
            <main>
                <LoginForm />
            </main>
            <Footer />
        </>
    );
};

export default LoginPage;
