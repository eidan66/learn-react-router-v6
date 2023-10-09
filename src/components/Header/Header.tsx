import {FunctionComponent} from "react";
import {Link} from "react-router-dom";

export const Header: FunctionComponent = () => (
    <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <Link to="/host">Host</Link>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
        </nav>
    </header>
)