import React, { useRef, useState, type FormEvent } from 'react'
import UserList from './UserList';

export type UserTypes = {
    id: string | number;
    name: string;
    email: string;
    password: string
}
const UserProfile: React.FC = () => {
    const [user, setUser] = useState<UserTypes[]>([])

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newUser = {
            id: crypto.randomUUID(),
            name: nameRef.current!.value,
            email: emailRef.current!.value,
            password: passwordRef.current!.value,
        }
        setUser([newUser, ...user])
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter name' ref={nameRef} />
                <input type="email" placeholder='Enter email' ref={emailRef} />
                <input type="password" placeholder='Enter password' ref={passwordRef} />
                <button type='submit'>Submit</button>
            </form>
            <h1>Display User: </h1>
            {
                user.map(item => (
                    <UserList key={item.id} userInfo={item} />
                ))
            }
        </div>
    )
}

export default UserProfile