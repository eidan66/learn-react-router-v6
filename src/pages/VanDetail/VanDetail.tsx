import {FunctionComponent, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Van} from "../../types/van.ts";


export const VanDetail:FunctionComponent = () => {
    const params = useParams()
    const [van, setVan] = useState<Van | null>(null)


    useEffect(() => {
        fetch(`/api/vans/${params.id}`).then(response => response.json()).then(data => {
            setVan(data.vans)
        })
    }, [params.id])

    return (
        <div className="van-detail-container">
            {van ? (
                <div className={"van-detail"}>
                    <img alt={'van-image'} src={van.imageUrl}/>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className={"van-price"}><span>${van.price}</span>\day</p>
                    <p>{van.description}</p>
                    <button className={'link-button'}>Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    );
}