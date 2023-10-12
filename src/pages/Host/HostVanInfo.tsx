import {FunctionComponent} from 'react'
import {useVanDetails} from '../../hooks/useVanDetails.tsx'

export const HostVanInfo: FunctionComponent = () => {
    const {description, name, type} = useVanDetails()

    return (
        <section className={'host-van-detail-info'}>
            <h4>Name: <span>{name}</span></h4>
            <h4>Category: <span>{type}</span></h4>
            <h4>Description: <span>{description}</span></h4>
            <h4>Visibility: <span>public</span></h4>
        </section>
    )
}