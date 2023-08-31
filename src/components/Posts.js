import { Typography, Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddLinkIcon from '@mui/icons-material/AddLink';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SwapCallsOutlinedIcon from '@mui/icons-material/SwapCallsOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import React, { useState } from 'react';
import { MyStates } from '../StateManage';
import ME from "../images/ME.jpeg";
import Sunset from "../images/sunset2.jpg";



function Posts() {
    let { Border, Color, postBg, BaseColor } = MyStates();
    const [NumberOfPosts, SetNumberOfPosts] = useState([{ Image: Sunset, Description: "Vacation is going great" }]);
    const [Heart, setHeart] = useState(false);
    const [postText, setPostText] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const HandleHeart = () => {
        if (Heart === true) {
            setHeart(false);
        }
        if (Heart === false) {
            setHeart(true);
        }
    };

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(selectedFile);
        }
    };
    const HandleCreatePost = () => {
        if (selectedImage && postText !== "") {
            const NewPost = { Image: selectedImage, Description: postText };
            SetNumberOfPosts([...NumberOfPosts, NewPost]);
            setPostText("");
            setSelectedImage(null);
            setPostText("");
        }
        else {
            alert("Please Check your Inputs Again")
        }
    };
    return (
        <div className="post" style={{ borderRight: `${Border}` }}>
            <div className="Home" style={{ borderBottom: `${Border}`, color: `${Color}` }}>
                <Typography style={{ fontWeight: "600" }}>Home</Typography>
                <AutoAwesomeIcon style={{ color: `${BaseColor}` }} />
            </div>
            <div className="add-post" style={{ display: "flex", padding: "2vw", background: `${postBg}`, gap: "2vw", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: "2vw" }}>
                    <img src={ME} alt="user" style={{ width: "clamp(30px,4vw,40px)", height: "clamp(30px,4vw,40px)", borderRadius: "50%" }} />
                    <textarea
                        placeholder="What's on your mind?"
                        onChange={(e) => setPostText(e.target.value)}
                        value={postText}
                        style={{
                            background: `${postBg}`,
                            border: "none",
                            outline: "none",
                            width: "100%",
                            resize: "none",
                            minHeight: "20vh",
                            maxHeight: "50vh",
                            padding: "10px",
                            boxSizing: "border-box",
                            overflowY: "auto",
                            color: `${Color}`,

                        }}
                    />
                </div>
                {selectedImage && <img src={selectedImage} style={{ height: "60vh", width: "100%" }}></img>}
                <div className="btn-group" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <div className="btns" style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                        <div>
                            <label htmlFor="imageInput">
                                <AddToPhotosIcon onChange={handleImageChange} sx={{
                                    color: `${BaseColor}`, ":hover": {
                                        transform: "scale(1.1)",

                                    },
                                }} />            </label>
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: "none" }}

                            />
                        </div>
                        <div>
                            <label htmlFor="imageInput">
                                <AddAPhotoIcon onChange={handleImageChange} sx={{
                                    color: `${BaseColor}`, ":hover": {
                                        transform: "scale(1.1)",

                                    },
                                }} />            </label>
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: "none" }}

                            />
                        </div>
                        <AddLinkIcon sx={{
                            color: `${BaseColor}`, ":hover": {
                                transform: "scale(1.1)",
                            },
                        }} />


                    </div>
                    <Button onClick={HandleCreatePost} variant='contained' sx={{
                        color: "white", background: BaseColor, ":hover": {
                            transform: "scale(1.1)",
                            background: BaseColor,
                        },
                    }} >Create Post<AddCircleIcon sx={{ marginLeft: "1vw" }} /></Button>

                </div>
            </div>
            {
                NumberOfPosts.map((Post) => {
                    return (
                        <div className="post" style={{ marginTop: "2vh", border: `${Border}` }}>
                            <div className="add-post" style={{ display: "flex", padding: "2vw", background: `${postBg}`, gap: "2vw", flexDirection: "column" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                                    <img src={ME} alt="user" style={{ width: "clamp(30px,4vw,40px)", height: "clamp(30px,4vw,40px)", borderRadius: "50%" }} />
                                    <div className="post-content" style={{ display: "flex", marginTop: "4vh" }}>
                                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                            <Typography style={{ fontWeight: "600", color: `${Color}` }}>Usman<Typography variant='p' style={{ color: "grey" }}> @usmaniac_03 . 10m</Typography></Typography>
                                            <Typography sx={{ color: `${Color}` }}>{Post.Description}</Typography>
                                        </div>
                                    </div>
                                </div>
                                <img src={Post.Image} alt="sunset" style={{ borderRadius: "10px", width: "100%", height: "60vh", objectFit: "cover" }} />
                                <div className="btn-grp" style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                    <ChatOutlinedIcon sx={{
                                        color: `${Color}`,

                                        ":hover": {
                                            transform: "scale(1.1)",
                                        }
                                    }} />
                                    <SwapCallsOutlinedIcon sx={{
                                        color: `${Color}`,
                                        ":hover": {
                                            transform: "scale(1.1)",
                                        }
                                    }} />

                                    <FavoriteOutlinedIcon onClick={HandleHeart} sx={{
                                        color: `${Heart ? "red" : Color}`, ":hover": {
                                            transform: "scale(1.1)",
                                        },


                                    }} />
                                    <FileDownloadOutlinedIcon sx={{
                                        color: `${Color}`,
                                        ":hover": {
                                            transform: "scale(1.1)",
                                        }
                                    }} />
                                </div>


                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Posts;