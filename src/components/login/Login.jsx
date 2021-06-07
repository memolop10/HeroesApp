import React from 'react'

const Login = ({history}) => {

    const handleLogin = () => {
        history.push('/')
    }

    return (
        <div className="container mt-5">
           <h1>Login Screen</h1> 
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}

export default Login
