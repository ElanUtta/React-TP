import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'elan',
            email: 'email@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}></button>
            <button onClick={handleLogout}></button>
            <div>User name is {user?.name} </div>
            <div>User email is {user?.email}</div>
        </div>
    )
}