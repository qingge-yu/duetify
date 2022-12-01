import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <main className='AuthPage'>
            <br /><br /><br /><br /><br />
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            <div>
                <h3 onClick={() => setShowLogin(!showLogin)} className='authToggle'>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
            </div>
        </main>
    )
}