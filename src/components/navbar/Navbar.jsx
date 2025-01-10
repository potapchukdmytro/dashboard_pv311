import { SolidButton } from "../../Buttons";
import * as style from "./style";
import "./style.css";

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
            <SolidButton text="Page 5" color="green" />
            <div onClick={themeCallback}>
                <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>ic_fluent_dark_theme_24_regular</title>
                    <desc>Created with Sketch.</desc>
                    <g
                        id="🔍-Product-Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                    >
                        <g
                            id="ic_fluent_dark_theme_24_regular"
                            fill={isDark ? "#fff" : "#212121"}
                            fillRule="nonzero"
                        >
                            <path
                                d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"
                                id="🎨-Color"
                            ></path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Navbar;
