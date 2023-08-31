import React from 'react';
import Posts from '../components/Posts';
import MobileSideArea from '../components/MobileSideArea';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { MyStates } from '../StateManage';
import { Typography } from '@mui/material';
import MobileMenu from '../components/MobileMebu';
function MobilePage() {
    let { Home, Explore, Notification, Messages, Color } = MyStates();
    const RenderPage = () => {
        if (Home) {
            return <Posts />;
        }
        else if (Explore) {
            return <div className="Pages" style={{ width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", height: "20vh", flexDirection: "column", gap: "5vh", fontFamily: `'Oswald', sans-serif` }}>
                <Typography variant='h3' sx={{ color: `${Color}`, fontWeight: "600", fontSize: "clamp(15px,4vw,40px)" }}>Nothing new to explore</Typography>
                <ExploreIcon style={{ color: `${Color}`, fontSize: "10vw" }} />
            </div>
        }
        else if (Notification) {
            return <div className="Pages" style={{ width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", height: "20vh", flexDirection: "column", gap: "5vh", fontFamily: `'Oswald', sans-serif` }}>
                <Typography variant='h3' sx={{ color: `${Color}`, fontWeight: "600", fontSize: "clamp(15px,4vw,40px)" }}>No new notifications</Typography>
                <NotificationsIcon style={{ color: `${Color}`, fontSize: "10vw" }} />
            </div>
        }
        else if (Messages) {
            return <div className="Pages" style={{ width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", height: "20vh", flexDirection: "column", gap: "5vh", fontFamily: `'Oswald', sans-serif` }}>
                <Typography variant='h3' sx={{ color: `${Color}`, fontWeight: "600", fontSize: "clamp(15px,4vw,40px)" }}>No new messages</Typography>
                <MailOutlineIcon style={{ color: `${Color}`, fontSize: "10vw" }} />
            </div>
        }
    }
    return (
        <div className="homepage" style={{ display: "flex" }}>

            <MobileMenu />
            <div>
                <MobileSideArea />
                {RenderPage()}
            </div>
        </div>
    )
}

export default MobilePage;