import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import "./Product.css"
const Product = () => {
    return (
        <div className="ppcontainer">
          <Navbar/>
          <Announcement/>
          <div className="ppwrapper">
              <div className="ppimgcontainer">
                  <img className="ppimg" src="https://i.ibb.co/S0sDsWy/ts.jpg"></img>
              </div>
              <div className="ppinfocontainer">
              <h1 className="pptitle">Fox T-shirts</h1>
              <p className="ppdesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta porro dolorum ipsa temporibus,
               consectetur voluptas maiores eius, 
              eligendi sunt ullam similique nesciunt atque fugiat officia assumenda optio id quaerat cum.</p>
<span className="Price">Rs1000</span>
<div className="ppfiltercontainer">
<div className="filter">
    <span className="filtertitle" >Color</span>
   
    <div className="ppfiltercolor" style={{background:"black"}}></div>
    <div className="ppfiltercolor" style={{background:"yellow"}}></div>
    <div className="ppfiltercolor" style={{background:"red"}}></div>

</div>
<div className="filter">
<span className="filtertitle"></span>
<select className="filter-size">
    <option >XS</option>
    <option >S</option>
    <option >M</option>
    <option >L</option>
    <option >XL</option>
</select>
</div>
</div>
<div className="addContainer">
    <div className="AmountContainer">
       <Remove/>
       <span className="amount">1</span>
       <Add/>
      
      
    </div>
    <button className="cart">Add to cart</button>
</div>
              </div>
          </div>
          <Newsletter/>
          <Footer/>
        </div>
    )
}

export default Product
