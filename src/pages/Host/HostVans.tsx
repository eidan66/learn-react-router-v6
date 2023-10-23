import {FunctionComponent, Suspense} from 'react'
import {Await, defer, Link, useLoaderData} from 'react-router-dom'
import {getHostVans} from '../../api.ts'
import {LoaderData, Van} from '../../types/van.ts'
import {requireAuth} from '../../utils/requireAuth.ts'


export const loader = async ({request}: { request: Request }) => {
    await requireAuth({request})
    return defer({vans: getHostVans()})
}

export const HostVans: FunctionComponent = () => {
    const dataPromise = useLoaderData() as LoaderData

    const renderVanElements = (vans: Van[]) => {
            const hostVansEls = vans.map((van: Van) => (
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
                <div className="host-vans-list">
                    <section>
                        {hostVansEls}
                    </section>
                </div>
            )
        }

return (
    <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <Suspense fallback={<h2>Loading Vans....</h2>}>
            <Await resolve={dataPromise.vans}>
                {renderVanElements}
            </Await>
        </Suspense>
    </section>
)
}