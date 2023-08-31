import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExploreIcon from '@mui/icons-material/Explore';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SpaIcon from '@mui/icons-material/Spa';
import { Typography, Switch } from '@mui/material';
import { MyStates } from '../StateManage';
import { styled } from "@mui/material";
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 42,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'black',
        width: 24,
        height: 24,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

function MobileMenu() {
    let { Color, setColor, setBackground, Border, setBorder, Home, setHome, Explore, setExplore, Notification, setNotification, Messages, setMessages, setpostBg, BaseColor } = MyStates();
    const [IsDarkMode, SetIsDarkMode] = useState(false);
    const SwitchEvent = () => {
        if (!IsDarkMode) {
            setBackground("#121212");
            setpostBg("#121212");
            setColor("white");
            setBorder("2px solid rgb(255,255,255,0.1)")
            SetIsDarkMode(true);
        }
        else if (IsDarkMode) {
            setBackground("#f0fff0");
            setpostBg("#FAF9F6");
            setColor("black");
            setBorder("2px solid rgb(0,0,0,0.1)");
            SetIsDarkMode(false)
        }

    }
    const setHomeTrue = () => {
        setHome(true);
        setExplore(false);
        setNotification(false);
        setMessages(false);
    }
    const setExploreTrue = () => {
        setHome(false);
        setExplore(true);
        setNotification(false);
        setMessages(false);
    }
    const setNotificationTrue = () => {
        setHome(false);
        setExplore(false);
        setNotification(true);
        setMessages(false);
    }
    const setMessagesTrue = () => {
        setHome(false);
        setExplore(false);
        setNotification(false);
        setMessages(true);
    }

    return (
        <>
            <div className="mobilemenu-container" style={{ borderBottom: `${Border}`, background: `#90EE90`, display: "flex", flexDirection: "row", height: "10vh", justifyContent: "space-between", alignItems: "center", padding: "1vw", position: "sticky", top: ".1px", zIndex: "100" }}>
                <div className="logo">
                    <SpaIcon style={{ fontSize: "clamp(30px,4vw,60px)", color: `${BaseColor}` }} />
                </div>

                <div className="menu" style={{ display: "flex", flexDirection: "row", background: `#90EE90` }}>
                    <div className="menu-item" onClick={setHomeTrue} style={{ color: `${Home ? "green" : "black"}` }}>
                        <HomeIcon /><Typography variant='p' fontWeight={600} ></Typography>
                    </div>
                    <div className="menu-item" onClick={setExploreTrue} style={{ color: `${Explore ? "green" : "black"}` }}>
                        <ExploreIcon /><Typography variant='p' fontWeight={600}></Typography>
                    </div>
                    <div className="menu-item" onClick={setNotificationTrue} style={{ color: `${Notification ? "green" : "black"}` }}>
                        <NotificationsIcon /><Typography variant='p' fontWeight={600}></Typography>
                    </div>
                    <div className="menu-item" onClick={setMessagesTrue} style={{ color: `${Messages ? "green" : "black"}` }}>
                        <MailOutlineIcon /><Typography variant='p' fontWeight={600}></Typography>
                    </div>

                    {
                        IsDarkMode ? <DarkModeIcon onClick={SwitchEvent} /> : <LightModeIcon onClick={SwitchEvent} />
                    }
                </div>

            </div>
        </>
    )
}

export default MobileMenu;