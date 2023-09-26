import {useEffect, useState} from "react";
import {Van} from "../../types/van.ts";
import {Link} from "react-router-dom";


export const Vans = () => {
    const [vans, setVans] = useState<Van[]>([])

    useEffect(() => {
        fetch("http://localhost:5173/api/vans").then(response => response.json()).then(({vans}) =>
            setVans(vans)
        )
    }, [])

    const vansElements = vans.map((van) => (
        <div key={van.id} className="van-title">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className='van-list'>
                {vansElements}
            </div>
        </div>
    )
}