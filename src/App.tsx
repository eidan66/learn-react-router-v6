import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import {Error} from './components/Error.tsx'

import {About} from './pages/About/About.tsx';
import {HostVanDetail} from './pages/Host/HostVanDetail.tsx'
import {HostVanInfo} from './pages/Host/HostVanInfo.tsx'
import {HostVanPhotos} from './pages/Host/HostVanPhotos.tsx'
import {HostVanPricing} from './pages/Host/HostVanPricing.tsx'
import {HostVans} from './pages/Host/HostVans.tsx'
import {NotFound} from './pages/NotFound.tsx'
import {loader as vansLoader, Vans} from './pages/Vans/Vans.tsx';
import {Home} from './pages/Home/Home.tsx';

import './server'
import {VanDetail} from './pages/Vans/VanDetail.tsx';
import {Layout} from './components/Layout/Layout.tsx';
import {Income} from './pages/Host/Income.tsx';
import {Reviews} from './pages/Host/Reviews.tsx';
import {HostLayout} from './components/HostLayout/HostLayout.tsx';
import {Dashboard} from './pages/Host/Dashboard.tsx';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>

        <Route path="vans" element={<Vans/>} loader={vansLoader} errorElement={<Error/>}/>
        <Route path="vans/:id" element={<VanDetail/>}/>

        <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            <Route path="vans" element={<HostVans/>}/>
            <Route path="vans/:id" element={<HostVanDetail/>}>
                <Route index element={<HostVanInfo/>}/>
                <Route path="pricing" element={<HostVanPricing/>}/>
                <Route path="photos" element={<HostVanPhotos/>}/>
            </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Route>
))

const App = () => (
    <RouterProvider router={router}/>
);


export default App
