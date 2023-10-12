import {FunctionComponent} from 'react'
import {useVanDetails} from '../../hooks/useVanDetails.tsx'

export const HostVanPricing: FunctionComponent = () => {
    const {price} = useVanDetails()

    return (
        <h3 className={'host-van-price'}>${price}<span>/day</span></h3>
    )
}