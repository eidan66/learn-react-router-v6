import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./pages/About/About.tsx";

import {Vans} from "./pages/Vans/Vans.tsx";
import {Home} from "./pages/Home/Home.tsx";

import "./server"
import {VanDetail} from "./pages/Vans/VanDetail.tsx";
import {Layout} from "./components/Layout/Layout.tsx";
import {Income} from "./pages/host/Income.tsx";
import {Reviews} from "./pages/host/Reviews.tsx";
import {HostLayout} from "./components/HostLayout/HostLayout.tsx";
import {Dashboard} from "./pages/host/Dashboard.tsx";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>

                <Route path="vans" element={<Vans/>}/>
                <Route path="vans/:id" element={<VanDetail/>}/>

                <Route path="host" element={<HostLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="income" element={<Income/>}/>
                    <Route path="reviews" element={<Reviews/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);


export default App
