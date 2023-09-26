import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css'
import App from "./App.tsx";
import {AboutUs} from "./components/AboutUs/AboutUs.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
