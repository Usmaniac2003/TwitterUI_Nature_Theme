import React from 'react';
import { TextField, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Moon from "../images/moon.jpg"
import { MyStates } from '../StateManage';

function MobileSideArea() {
    let NumOfTrendingPosts = [1];
    let { Border, postBg, Color } = MyStates();
    return (
        <div className="sidearea" style={{ padding: "2vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div className="search">
                <TextField
                    fullWidth
                    sx={{
                        background: "#8b8b8b",
                        borderRadius: "4px",
                        '& .MuiOutlinedInput-root': {
                            '&:hover': {
                                borderColor: 'none',
                                outline: "none"

                            },
                            '&.Mui-focused': {
                                borderColor: 'none',
                                outline: "none"
                            },

                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon style={{ color: 'white', cursor: "pointer" }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <div className="trending" style={{ background: `${postBg}`, color: `${Color}`, borderRadius: "4px", padding: "1vw", border: `${Border}` }}>
                <Typography variant='h6' fontWeight={600}>Trends for you</Typography>
                <div className="trendingposts" style={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
                    {NumOfTrendingPosts.map(() => {
                        return (
                            <>
                                <div className="moon" style={{ display: "flex", flexDirection: "column", gap: "1vw", marginTop: "1vw", borderBottom: `${Border}` }}>
                                    <Typography variant='p' sx={{ color: "grey" }}>Trending Worldwide</Typography>
                                    <Typography variant='h4' style={{ fontSize: "clamp(20px,4vw,40px)" }}>#Breaking News</Typography>
                                    <Typography variant='p' fontWeight={600} sx={{ color: "grey" }}>Space</Typography>
                                    <Typography variant='p'>Lunar Photography Improves the discovery of Moon</Typography>
                                    <img src={Moon} alt="" style={{ borderRadius: "10px" }} />
                                    <Typography>49k people are tweeting about this</Typography>
                                </div>

                            </>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default MobileSideArea;