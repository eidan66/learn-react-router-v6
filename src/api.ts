import {Van} from './types/van.ts'

export const getVans = async (id?: String): Promise<Van[]> => {
    const url = id ? `/api/vans/${id}` : '/api/vans'
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: 'Failed to fetch vans',
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}


export const getHostVans = async (id?: string):Promise<Van[]> => {
    const url = id ? `/api/host/vans/${id}` : '/api/host/vans'
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: 'Failed to fetch vans',
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}


export const loginUser= async (creds: any)=> {
    const res = await fetch ("/api/login", {
        method:'post',body:JSON.stringify(creds)
    })
    
    const data = await res.json();
    
    if(!res.ok){
        throw {
            message:data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    
    return data;
    
}