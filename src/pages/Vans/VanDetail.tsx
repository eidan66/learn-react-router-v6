import {FunctionComponent} from 'react';
import {Link, LoaderFunctionArgs, useLoaderData, useLocation} from 'react-router-dom';

import {getVan} from '../../api.ts'
import {Van} from '../../types/van.ts';

export const loader = ({params}: LoaderFunctionArgs
) => getVan(params.id as string)

export const VanDetail: FunctionComponent = () => {
    const location = useLocation()
    const search = location?.state?.search || ''
    const type = location?.state?.type || 'all'
    const van = useLoaderData() as Van;

    return (
        <div className="van-detail-container">
            <Link to={`..${search}`} relative={'path'} className={'back-button'}>&larr;
                <span>Back to {type} vans</span></Link>
                <div className={'van-detail'}>
                    <img alt={van.name} src={van.imageUrl}/>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className={'van-price'}><span>${van.price}</span>\day</p>
                    <p>{van.description}</p>
                    <button className={'link-button'}>Rent this van</button>
                </div>
        </div>
    );
}