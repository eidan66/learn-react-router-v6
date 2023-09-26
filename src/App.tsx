import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./pages/About/About.tsx";

import {Vans} from "./pages/Vans/Vans.tsx";
import {Home} from "./pages/Home/Home.tsx";

import "./server"
import {VanDetail} from "./pages/VanDetail/VanDetail.tsx";
import {Layout} from "./components/Layout/Layout.tsx";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/vans" element={<Vans/>}/>
                <Route path="/vans/:id" element={<VanDetail/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);


export default App
