import {BaseSyntheticEvent, FunctionComponent, useState} from 'react'

interface LoginDetails {
    email: string,
    password: string
}

export const Login: FunctionComponent = () => {
    const [loginFormData, setLoginFormData] = useState<LoginDetails>({email: '', password: ''})

    function handleSubmit(e: BaseSyntheticEvent) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e: BaseSyntheticEvent) {
        const {name, value} = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}