import {FunctionComponent, Suspense} from 'react';
import {getVans} from '../../api.ts'
import {LoaderData, Van} from '../../types/van.ts';
import {Link, useSearchParams, useLoaderData, defer, Await} from 'react-router-dom';

export const loader = () => defer({
    vans: getVans()
})

export const Vans: FunctionComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const dataPromise = useLoaderData() as LoaderData

    const typeFilter = searchParams.get('type')

    const renderVansElements = (vans: Van[]) => {
        const displayedVans = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter.toLowerCase()) : vans

        const vansElements = displayedVans.map((van) => (
            <div key={van.id} className="van-tile">
                <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}}>
                    <img alt={van.name} src={van.imageUrl}/>
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        ))


        return <>
            <div className={'van-list-filter-buttons'}>
                <button className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}
                        onClick={() => handleFilterChange('type', 'simple')}>Simple
                </button>
                <button className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}
                        onClick={() => handleFilterChange('type', 'luxury')}>Luxury
                </button>
                <button className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}
                        onClick={() => handleFilterChange('type', 'rugged')}>Rugged
                </button>
                {typeFilter &&
                    <button className={'van-type clear-filters'}
                            onClick={() => handleFilterChange('type', null)}>Clear
                        filter
                    </button>}
            </div>
            <div className="van-list">
                {vansElements}
            </div>
        </>
    }
    const handleFilterChange = (key: string, value: string | null) => {
        setSearchParams(prevParam => {
            if (value === null) {
                prevParam.delete(key)
            } else {
                prevParam.set(key, value)
            }

            return prevParam
        })
    }


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={dataPromise.vans}>
                    {renderVansElements}
                </Await>
            </Suspense>
        </div>
    )
}