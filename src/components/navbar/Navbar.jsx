import * as style from "./style";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./style.css";
import {IconButton, Button, Avatar, Box, Menu, MenuItem, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../providers/AuthProvider";
import {defaultAvatarUrl} from "../../settings/urls";

const Navbar = ({isDark = false, themeCallback}) => {
    const navLinkStyle = isDark ? style.navLinkDark : style.navLinkLight;
    const {auth, logout} = useContext(AuthContext);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();

    const settings = [
        {
            name: 'Profile', action: () => {
                navigate("/profile")
            }
        },
        {name: 'Logout', action: logout}
    ];

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
                {
                    auth && auth.role === "admin" ? (
                        <Link style={navLinkStyle} to="/admin">
                            Admin panel
                        </Link>
                    ) : (
                        <Link style={navLinkStyle} to="/">
                            Page
                        </Link>)
                }
                <Link style={navLinkStyle} to="/">
                    Page 4
                </Link>
            </div>

            <div onClick={themeCallback} className="navtheme">
                {isDark ? (
                    <IconButton sx={{color: "white"}}>
                        <LightModeIcon/>
                    </IconButton>
                ) : (
                    <IconButton>
                        <DarkModeIcon/>
                    </IconButton>
                )}
            </div>
            <div style={{flexGrow: 1}}>
                {!auth ? (
                    <Box className="navauth">
                        <Link to="login">
                            <Button
                                style={{margin: "0px 5px 0px 0px"}}
                                variant="contained"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="register">
                            <Button
                                style={{margin: "0px 10px 0px 5px"}}
                                variant="contained"
                            >
                                Register
                            </Button>
                        </Link>
                    </Box>
                ) : (
                    <>
                        <Box style={{display: "flex", justifyContent: "center"}}>
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src={auth.image ? auth.image : defaultAvatarUrl}/>
                            </IconButton>
                        </Box>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.name} onClick={() => {
                                    handleCloseUserMenu();
                                    if (setting.action) {
                                        setting.action();
                                    }
                                }}>
                                    <Typography sx={{textAlign: 'center'}}>{setting.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                )}
            </div>
        </div>
    )
        ;
};

export default Navbar;
