import { Send } from '@material-ui/icons'
import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="newscontainer">
        <h1 className="newstitle">NewsLetter</h1>
        <div className="newsdesc">Get Timely updates from Favorite Products</div>
        <div className="inputContainer">
            <input placeholder="Your E-mail" />
            <button className="send">
                <Send/>
            </button>
        </div>
            
        </div>
    )
}

export default Newsletter
