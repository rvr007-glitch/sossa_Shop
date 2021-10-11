import { Badge } from '@material-ui/core'

import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'


import './navbar.css'


const Navbar = () => {
    return (
        <div className="component" >
        <div className="wrapper">
         
        <div className="left">
            <span className="language">EN</span>
            <div className="searchContainer">
                <input  className="Input" />
                <Search style={{color:"grey",fontSize:16}}/>
            </div>
           
        </div>
        <div className="center">
            <h1 className="logo">SOSA.</h1>
        </div>
        <div className="right">
        <div className="menuItem">Register</div>
        <div className="menuItem">Sign In</div>
        <div className="menuItem"> <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlined

/>
      </Badge></div>
        </div>
      
        
        </div>
          
        </div>
    )
}

export default Navbar
