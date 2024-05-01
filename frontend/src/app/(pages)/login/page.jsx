import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import LoginForm from "@/app/components/forms/LoginForm";

const LoginPage = () => {
    return (
        <>
            <Header />
            <main>
                <LoginForm />
            </main>
        </>
    );
};

export default LoginPage;
