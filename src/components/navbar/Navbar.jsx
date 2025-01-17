import * as style from "./style";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./style.css";
import { IconButton, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ isDark = false, themeCallback }) => {
    const navLinkStyle = isDark ? style.navLinkDark : style.navLinkLight;

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
                <Link to="login">
                    <Button style={{margin: "0px 5px 0px 0px"}} variant="contained">Login</Button>
                </Link>
                <Link to="register">
                    <Button style={{margin: "0px 10px 0px 5px"}} variant="contained">Register</Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
