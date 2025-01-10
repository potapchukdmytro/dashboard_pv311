import { useState, useEffect } from "react";
import MainPage from "./pages/mainPage/MainPage";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

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
            <div>
                <button onClick={changeThemeHandler} style={{margin: "10px 5px"}}>Change theme</button>
            </div>
            <MainPage />
            <Footer />
        </>
    );
};

export default App;
