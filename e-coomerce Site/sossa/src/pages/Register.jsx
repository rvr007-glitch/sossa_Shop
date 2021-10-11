import React from 'react'
import "./register.css"

const Register = () => {
    return (
        <div className="regcontainers">
        <div className="regwrapper">
            <h1 className="regtitle">Create An Account</h1>
            <form>
                <input className="infield" placeholder="name"/> 
                <input className="infield" placeholder=" last name"/> 
                <input className="infield" placeholder="user-name"/> 
                <input className="infield" placeholder="email"/> 
                <input className="infield" placeholder="password"/> 
                <input className="infield" placeholder="confirm password"/>  
               <span className="agreements">
                   By creating an account,I consent to the processing of my personal data
                   data in accordance with the <b>PRIVACY POLICY</b>
               </span>
               <button className="Creates">Create</button>
            </form>
        </div>
            
        </div>
    )
}

export default Register
