import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="fcontainer">
        <div className="fleft">
            <h1 className="flogo">Sosa.</h1>
            <p className="fdesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestias non autem quo. Sunt in odit dolorem ducimus quasi culpa.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, non.
            </p>
            <div className="socialcontainer">
                <div className="socialicon f" >
                    <Facebook/>
                </div>
                <div className="socialicon i ">
                    <Instagram/>
                </div>
                <div className="socialicon t">
                    <Twitter/>
                </div>
                <div className="socialicon p">
                    <Pinterest/>
                </div>
            </div>
        </div>
        <div className="fcenter">
            <h3 className="ftitle">Useful Links</h3>
            <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Man Fashin</li>
            <li>Woman Fashion</li>
            <li>Accessories</li>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>Wishlist</li>
            <li>Terms</li>
            </ul>
            
        </div>
        <div className="fright">
        <h3 className="contact">Contact</h3>
        <div className="contactItem"><Room style={{marginRight:"10px"}}/>House No.5 biharSharif,Nalanda</div>  
        <div className="contactItem"><Phone style={{marginRight:"10px"}}/> +91 8254455523</div>  
        <div className="contactItem"><MailOutline style={{marginRight:"10px"}}/> contact@sosa.com</div>
        <img className="payment" src="https://i.ibb.co/Ph0Gbp0/card.jpg"></img>
        </div>
        </div>
    )
}

export default Footer
