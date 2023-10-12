import {FunctionComponent} from 'react'
import {useVanDetails} from '../../hooks/useVanDetails.tsx'

export const HostVanPhotos: FunctionComponent = () => {
    const {imageUrl} = useVanDetails()

    return (
        <img alt='host-van-detail-image' src={imageUrl} className={'host-van-detail-image'}/>
    )
}