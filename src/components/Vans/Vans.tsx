import {useEffect, useState} from "react";

interface Van {
    id: number;
    description: string;
    imageUrl: string;
    name: string;
    price: number;
    type: string
}


export const Vans = () => {
    const [vans, setVans] = useState<Van[]>([])

    useEffect(() => {
        fetch("http://localhost:5173/api/vans").then(response => response.json()).then(({vans}) =>
            setVans(vans)
        )
    }, [])

    const vansElements = vans.map((van) => (
        <div key={van.id} className="van-title">
            <img src={van.imageUrl}/>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
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