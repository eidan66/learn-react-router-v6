import {FunctionComponent} from 'react'
import {Form, LoaderFunctionArgs, redirect, useActionData, useLoaderData, useNavigation} from 'react-router-dom'
import {loginUser} from '../../api.ts'

export const loader = async ({request}: LoaderFunctionArgs) => {
    return new URL(request.url).searchParams.get('message')
}

export const action = async ({request}: { request: Request }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const redirectTo = new URL(request.url).searchParams.get('redirectTo') || '/host'

    try {
        // @ts-ignore
        const data = await loginUser({email, password})
        localStorage.setItem('loggedin', 'true')

        return {
            ...redirect(redirectTo),
            body: true
        }

    } catch (error) {
        return (error as Error).message
    }
}

export const Login: FunctionComponent = () => {
    const errorMessage = useActionData() as string
    const navigation = useNavigation()
    const message = useLoaderData() as string

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h2 className={'red'}>{message}</h2>}
            {errorMessage && <h3 className={'red'}>{errorMessage}</h3>}
            <Form replace method={'post'} className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation.state === 'submitting'}>{navigation.state === 'submitting' ? 'Logging in...' : 'Log in'}</button>
            </Form>
        </div>
    )

}