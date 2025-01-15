import Navbar from "../navbar/Navbar";
import Footer from "../footer";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import {useEffect, useState} from "react";

const DefaultLayout = () => {

    // state
    const [theme, setTheme] = useState("light");

    const changeThemeHandler = () => {
        const currentTheme = theme === "dark" ? "light" : "dark";
        setTheme(currentTheme);
        localStorage.setItem("theme", currentTheme);
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
            setTheme(currentTheme);
        }
    }, []);

    return (
        <>
            <Navbar isDark={theme === "dark"} themeCallback={changeThemeHandler}/>
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </>
    )
}

export default DefaultLayout;