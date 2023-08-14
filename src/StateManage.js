import { createContext, useContext, useState } from "react";
const MyContext = createContext();

const MyContextProvider = (props) => {
    const [state, setState] = useState(1);
    return <>
        <MyContext.Provider value={{ state, setState }}>
            {props.children}
        </MyContext.Provider>
    </>

}

const MyStates = () => useContext(MyContext);

export { MyContextProvider, MyStates };