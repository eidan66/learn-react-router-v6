import {FunctionComponent, useEffect, useState} from 'react'
import {Link, useParams, Outlet, NavLink} from 'react-router-dom'
import {Van} from '../../types/van.ts'
import {getActiveStyles} from '../../utils/getActiveStyle.ts'

export const HostVanDetail: FunctionComponent = () => {
    const {id} = useParams()
    const [currentVan, setCurrentVan] = useState<Van | null>(null)

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <Link  to={'..'} relative={'path'} className={'back-button'}>&larr; <span>Back to all vans</span></Link>
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