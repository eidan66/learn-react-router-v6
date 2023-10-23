import {FunctionComponent} from 'react'
import {Link, Outlet, NavLink, LoaderFunctionArgs, useLoaderData} from 'react-router-dom'
import {getVan} from '../../api.ts'
import {Van} from '../../types/van.ts'
import {getActiveStyles} from '../../utils/getActiveStyle.ts'
import {requireAuth} from '../../utils/requireAuth.ts'


export const loader = async  ({request, params}: LoaderFunctionArgs) => {
    await requireAuth({request})
    return getVan(params.id as string)
}

export const HostVanDetail: FunctionComponent = () => {
    const currentVan = useLoaderData() as Van;

    return (
        <section>
            <Link to={'..'} relative={'path'} className={'back-button'}>&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl}/>
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className={'host-van-detail-nav'}>
                    <NavLink style={getActiveStyles} end to=".">Details</NavLink>
                    <NavLink style={getActiveStyles} to="pricing">Pricing</NavLink>
                    <NavLink style={getActiveStyles} to="photos">Photos</NavLink>
                </nav>
                <Outlet context={currentVan}/>
            </div>
        </section>
    )
}