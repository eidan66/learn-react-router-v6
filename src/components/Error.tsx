import {FunctionComponent} from 'react'
import {useRouteError} from 'react-router-dom'

import {IError} from '../types/Error.ts'

export const Error: FunctionComponent = () => {
    const {message, status, statusText} = useRouteError() as IError

    return (
        <>
            <h1>Error: {message}</h1>
            <pre>{status} - {statusText}</pre>
        </>
    )
}