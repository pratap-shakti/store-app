import { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext";
import NestHomeComponent from "./NestHomeComponent";
import { useSelector } from "react-redux";

const HomeComponent = () => {
    const { title } = useContext(GlobalContext);
    const reduxTitle = useSelector((state: { title: string }) => state.title);

    return <>
        <div style={{backgroundColor:'red'}}>I am the home Context component -{title}</div>
        <div style={{backgroundColor:'green'}}>I am the redux title - {reduxTitle}</div>
        <NestHomeComponent />
    </>
}

export default HomeComponent;