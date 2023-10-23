import {redirect} from 'react-router-dom'

export const requireAuth = async ({request}: { request: Request }) => {
    const isLoggedIn = localStorage.getItem('loggedin') || false;
    const pathname = new URL(request.url).pathname

    if (!isLoggedIn) {
        throw {
            ...redirect(`/login?message=You must log in first.&redirectTo=${pathname}`
            ),
            body: true
        }
    }

    return null
}