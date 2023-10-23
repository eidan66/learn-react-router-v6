import {FunctionComponent} from 'react'
import {Link, useLoaderData} from 'react-router-dom'
import {getHostVans} from '../../api.ts'
import {Van} from '../../types/van.ts'
import {requireAuth} from '../../utils/requireAuth.ts'


export const loader = async ({request}:{request:Request}) => {
    await requireAuth({request})
    return getHostVans()
}

export const HostVans: FunctionComponent = () => {
    const vans = useLoaderData() as Van[];

    const hostVansEls = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`}/>
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                <section>
                    {hostVansEls}
                </section>
            </div>
        </section>
    )
}