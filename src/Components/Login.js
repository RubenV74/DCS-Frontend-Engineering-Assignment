import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useLocation} from 'react-router-dom';
const LoginRegister = (props) => {
    const location = useLocation();
    const {isLogin} = location.state;
    const [username, setUsername] =useState('');
    const [usernameError, setUsernameError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate()

    const validateAndLoginRegister = () => {
        // Set initial error values to empty
        setUsernameError('')
        setPasswordError('')

        // Check if the user has entered both fields correctly
        if ('' === username) {
            setUsernameError('Please enter your username')
            return
        }

        if (!/^[a-zA-Z0-9_-]{3,16}$/.test(username)) {
            setUsernameError('Please enter a valid username')
            return
        }

        if ('' === password) {
            setPasswordError('Please enter a password')
            return
        }

        if (password.length < 8) {
            setPasswordError('The password must be 8 characters or longer')
            return
        }

    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                {isLogin ?<div> Login </div>:<div>Register</div>}
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={username}
                    placeholder="Enter your username here"
                    onChange={(ev) => setUsername(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{usernameError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={validateAndLoginRegister} value={isLogin? 'Log in' : 'Register'} />
            </div>
        </div>
    )
}

export default LoginRegister