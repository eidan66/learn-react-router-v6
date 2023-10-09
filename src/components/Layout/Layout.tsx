import {FunctionComponent} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";

export const Layout: FunctionComponent = () => {

    return (
        <div className={"site-wrapper"}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}