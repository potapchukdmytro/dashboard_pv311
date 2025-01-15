import * as style from "./style";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./style.css";
import { IconButton } from "@mui/material";
import {Link} from "react-router-dom";

const Navbar = ({ isDark = false, themeCallback }) => {
    const navLinkStyle = isDark ? style.navLinkDark : style.navLinkLight;

    return (
        <div
            style={isDark ? style.navbarDark : style.navbarLight}
            className="navbar"
        >
            <Link style={navLinkStyle} to="/">
                Main page
            </Link>
            <Link style={navLinkStyle} to="/about">
                About
            </Link>
            <Link style={navLinkStyle} to="/register">
                Register
            </Link>
            <Link style={navLinkStyle} to="/">
                Page 4
            </Link>
            <div onClick={themeCallback}>
                { 
                    isDark ? 
                    <IconButton sx={{ color: "white" }}><LightModeIcon /></IconButton> : 
                    <IconButton><DarkModeIcon /></IconButton> }
            </div>
        </div>
    );
};

export default Navbar;
