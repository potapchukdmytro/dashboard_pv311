import * as style from "./style";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./style.css";
import { IconButton } from "@mui/material";

const Navbar = ({ isDark = false, themeCallback }) => {
    const navLinkStyle = isDark ? style.navLinkDark : style.navLinkLight;

    return (
        <div
            style={isDark ? style.navbarDark : style.navbarLight}
            className="navbar"
        >
            <a style={navLinkStyle} href="#">
                Main page
            </a>
            <a style={navLinkStyle} href="#">
                About
            </a>
            <a style={navLinkStyle} href="#">
                Page 3
            </a>
            <a style={navLinkStyle} href="#">
                Page 4
            </a>
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
