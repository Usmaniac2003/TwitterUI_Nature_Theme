import { createContext, useContext, useState } from "react";
const MyContext = createContext();

const MyContextProvider = (props) => {
    const [Color, setColor] = useState("black");
    const [Background, setBackground] = useState("#f0fff0");
    const [Border, setBorder] = useState("2px solid rgb(0,0,0,0.1)");
    const [postBg, setpostBg] = useState("#FAF9F6");
    const [Home, setHome] = useState(true);
    const [Explore, setExplore] = useState(false);
    const [Notification, setNotification] = useState(false);
    const [Messages, setMessages] = useState(false);
    const [BaseColor, SetBaseColor] = useState("green");

    return <>
        <MyContext.Provider value={{ Color, setColor, Background, setBackground, Border, setBorder, Home, setHome, Explore, setExplore, Notification, setNotification, Messages, setMessages, postBg, setpostBg, BaseColor, SetBaseColor }}>
            {props.children}
        </MyContext.Provider>
    </>

}

const MyStates = () => useContext(MyContext);

export { MyContextProvider, MyStates };