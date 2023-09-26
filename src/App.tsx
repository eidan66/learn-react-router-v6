import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutUs} from "./components/AboutUs/AboutUs.tsx";
import {Home} from "./components/Home/Home.tsx";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
    </BrowserRouter>
)


export default App
