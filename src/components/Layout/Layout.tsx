import {FunctionComponent} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header.tsx";

export const Layout: FunctionComponent = () => {

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}