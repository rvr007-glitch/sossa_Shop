import React from 'react'
import "./login.css"

const Login = () => {
    return (
        <div className="regcontainer">
        <div className="regwrapper">
            <h1 className="regtitle">Sign In</h1>
            <form>
                <input className="infield" placeholder=" use-name"/> 
               
                <input className="infield" placeholder="password"/> 
              
               <button className="Create">Log In</button>
               <a>Don't Remember The Password??</a>
               <a>Create A New Account</a>
            </form>
        </div>
            
        </div>
    )
}

export default Login
