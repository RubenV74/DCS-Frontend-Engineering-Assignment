import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    const navigateLoginRegister = (isLogin) => {
        navigate('Login', {state:{isLogin: isLogin}})
    }

    return (
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <div>Welcome!</div>
            </div>
            <div>This is the home page.</div>
            <div className={'buttonContainer'}>
                <input
                    className={'inputButton'}
                    type="button"
                    onClick={(e)=>navigateLoginRegister(true)}
                    value="Login"
                />
                <input
                    className={'inputButton'}
                    type="button"
                    onClick={(e)=>navigateLoginRegister(false)}
                    value="Register"
                />
            </div>
        </div>
    )
}

export default Welcome