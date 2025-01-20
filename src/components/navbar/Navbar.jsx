import * as style from "./style";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./style.css";
import { IconButton, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = ({ isDark = false, themeCallback }) => {
    const navLinkStyle = isDark ? style.navLinkDark : style.navLinkLight;
    const { auth, logout } = useContext(AuthContext); 

    const logoutHandler = () => {
        logout();
    }

    return (
        <div
            style={isDark ? style.navbarDark : style.navbarLight}
            className="navbar"
        >
            <div className="navlinks">
                <Link style={navLinkStyle} to="/">
                    Main page
                </Link>
                <Link style={navLinkStyle} to="/about">
                    About
                </Link>
                <Link style={navLinkStyle} to="/users">
                    Users
                </Link>
                <Link style={navLinkStyle} to="/">
                    Page 4
                </Link>
            </div>

            <div onClick={themeCallback} className="navtheme">
                {isDark ? (
                    <IconButton sx={{ color: "white" }}>
                        <LightModeIcon />
                    </IconButton>
                ) : (
                    <IconButton>
                        <DarkModeIcon />
                    </IconButton>
                )}
            </div>
            <div className="navauth">
                {!auth ? (
                    <>
                        <Link to="login">
                            <Button
                                style={{ margin: "0px 5px 0px 0px" }}
                                variant="contained"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="register">
                            <Button
                                style={{ margin: "0px 10px 0px 5px" }}
                                variant="contained"
                            >
                                Register
                            </Button>
                        </Link>
                    </>
                ) : (
                    <Button
                        onClick={logoutHandler}
                        style={{ margin: "0px 10px 0px 5px" }}
                        variant="contained"
                    >
                        Logout
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
