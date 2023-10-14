import {Van} from './types/van.ts'

export const getVans = async (): Promise<Van[]> => {
    const res = await fetch('/api/vans')
    if (!res.ok) {
        throw {
            message: 'Failed to fetch vans',
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()

    return data.vans;
}