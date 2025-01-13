import { useState, useEffect } from "react";
import MainPage from "./pages/mainPage/MainPage";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import RegisterPage from "./pages/registerPage/RegisterPage";

const App = () => {
    // state
    const [theme, setTheme] = useState("light");

    const changeThemeHandler = () => {
        const currentTheme = theme === "dark" ? "light" : "dark";
        setTheme(currentTheme);
        localStorage.setItem("theme", currentTheme);
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if(currentTheme) {
            setTheme(currentTheme);
        }
    }, []);    

    return (
        <>
            <Navbar isDark={theme === "dark"} themeCallback={changeThemeHandler} />
            {/* <MainPage /> */}
            <RegisterPage />
            <Footer />
        </>
    );
};

export default App;
