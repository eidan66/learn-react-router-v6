import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {About} from "./components/About/About.tsx";

import {Vans} from "./components/Vans/Vans.tsx";
import {Home} from "./components/Home/Home.tsx";

import "./server"
import {VanDetail} from "./components/VanDetail/VanDetail.tsx";

const App = () => (
    <BrowserRouter>
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/vans" element={<Vans/>}/>
            <Route path="/vans/:id" element={<VanDetail />}/>
        </Routes>
    </BrowserRouter>
);


export default App
