import { useState, MouseEvent, useContext } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Switch } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Groups2Icon from '@mui/icons-material/Groups2';
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { ThemeContextType } from '../@types/theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


const pages = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const { isDarkMode, changeTheme } = useContext(ThemeContext) as ThemeContextType;

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/tsn"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            alignItems: "cemter",
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#fff',
                            textDecoration: 'none',
                            "&:hover": {
                                color: "#fff"
                            }
                        }}
                    >

                        <Groups2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        TSN
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link to={`/${page.toLowerCase() !== "home" ? page.toLowerCase() : "tsn"}`}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/tsn"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            alignItems: "center",
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#fff',
                            textDecoration: 'none',
                            "&:hover": {
                                color: "#fff"
                            }
                        }}
                    >
                        <Groups2Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        TSN
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={`/${page.toLowerCase() !== "home" ? page.toLowerCase() : "tsn"}`} key={page} style={{ textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                        <Box sx={{ paddingX: 2, display: "flex", alignItems: "center" }}>
                            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
                            <Switch onClick={changeTheme} />
                        </Box>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
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
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
