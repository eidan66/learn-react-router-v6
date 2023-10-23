import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import {Error} from './components/Error.tsx'

import {About} from './pages/About/About.tsx';
import {loader as hostVanDetailsLoader, HostVanDetail} from './pages/Host/HostVanDetail.tsx'
import {HostVanInfo} from './pages/Host/HostVanInfo.tsx'
import {HostVanPhotos} from './pages/Host/HostVanPhotos.tsx'
import {HostVanPricing} from './pages/Host/HostVanPricing.tsx'
import {loader as hostVanLoader, HostVans} from './pages/Host/HostVans.tsx'
import {loader as loginLoader, Login, action as loginAction} from './pages/Login/Login.tsx'
import {NotFound} from './pages/NotFound.tsx'
import {loader as vansLoader, Vans} from './pages/Vans/Vans.tsx';
import {Home} from './pages/Home/Home.tsx';

import './server.js'
import {loader as vanDetailLoader, VanDetail} from './pages/Vans/VanDetail.tsx';
import {Layout} from './components/Layout/Layout.tsx';
import {Income} from './pages/Host/Income.tsx';
import {Reviews} from './pages/Host/Reviews.tsx';
import {HostLayout} from './components/HostLayout/HostLayout.tsx';
import {Dashboard} from './pages/Host/Dashboard.tsx';
import {requireAuth} from './utils/requireAuth.ts'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="login" element={<Login/>} loader={loginLoader} action={loginAction}/>

        <Route path="vans" element={<Vans/>} loader={vansLoader} errorElement={<Error/>}/>
        <Route path="vans/:id" element={<VanDetail/>} loader={vanDetailLoader} errorElement={<Error/>}/>

        <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}
                   loader={async ({request}) => await requireAuth({request})}
            />
            <Route path="income" element={<Income/>}
                   loader={async ({request}) => await requireAuth({request})}

            />
            <Route path="reviews" element={<Reviews/>}
                   loader={async ({request}) => await requireAuth({request})}

            />
            <Route path="vans" element={<HostVans/>}
                   loader={hostVanLoader}
                   errorElement={<Error/>}
            />
            <Route path="vans/:id" element={<HostVanDetail/>} loader={hostVanDetailsLoader}>
                <Route index element={<HostVanInfo/>}
                       loader={async ({request}) => await requireAuth({request})}
                       errorElement={<Error/>}

                />
                <Route path="pricing" element={<HostVanPricing/>}
                       loader={async ({request}) => await requireAuth({request})}

                />
                <Route path="photos" element={<HostVanPhotos/>}
                       loader={async ({request}) => await requireAuth({request})}

                />
            </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Route>
))

const App = () => (
    <RouterProvider router={router}/>
);


export default App
