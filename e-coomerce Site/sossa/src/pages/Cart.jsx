import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import "./Cart.css"

const Cart = () => {
    return (
        <div className="cartcontainer">
            <Navbar />

            <Announcement />
            <div className="Wrappercart">
                <h1 className="carttitle">Your Bag</h1>
                <div className="top">

                    <button className="top-btn b1">Continue Shoping</button>
                    <div className="toptexts">
                        <span className="toptext">
                            Shoping Bag(2)
                        </span>
                        <span className="toptext">
                            WishList(0)


                        </span>
                    </div>
                    <button className="top-btn b2">CheckOut Now</button>
                </div>
                <div className="bottom">
                    <div className="cart-info">
                    
                    <div className="cart-product">
                        <div className="product-detail">
                            <img className="shoes" src="https://i.ibb.co/98LKgwF/revolt-164-6w-VEHf-I-unsplash.jpg" alt="" />
                            <div className="cartdetails">
                                <span className="product-name">
                                    <b>Product:</b>Nike Shoes
                                </span>
                                <span className="product-id">
                                    <b>Id:</b>93252565855
                                </span>
                                <div className="product-color"></div>
                                <span className="product-size">
                                    <b>Size:</b>37.5
                                </span>

                            </div>
                       
                    </div>
                   
                   
                
               
                        <div className="price-detail">

                            <div className="productamountcontainer">
                                <Add/>
                                <div className="product-amount">2</div>
                                <Remove/>
                            </div>
                            <div className="product-Price">Rs 1200</div>
                        </div>
                    </div>
                    <hr/>
                    
                    <div className="cart-product">
                        <div className="product-detail">
                            <img className="shoes" src="https://i.ibb.co/ZTFLBkt/alex-haigh-f-Et6-Wd4t4j0-unsplash.jpg" alt="" />
                            <div className="cartdetails">
                                <span className="product-name">
                                    <b>Product:</b>Haukra T-shirts
                                </span>
                                <span className="product-id">
                                    <b>Id:</b>8753252565855
                                </span>
                                <div className="product-color" style={{background:"#bfb1a6"}}></div>
                                <span className="product-size">
                                    <b>Size:</b>M
                                </span>

                            </div>
                       
                    </div>
                   
                   
                
               
                        <div className="price-detail">

                            <div className="productamountcontainer">
                                <Add/>
                                <div className="product-amount">1</div>
                                <Remove/>
                            </div>
                            <div className="product-Price">Rs 900</div>
                        </div>
                    </div>
                    </div>
                    <div className="cartsummary">
                        <h1 className="summarytitle">Order Summary</h1>
                        <div className="summaryitem">
                            <span className="summarytext">Sub-Total</span>
                            <span className="summaryprice">Rs 2000</span>
                            </div>
                            <div className="summaryitem">
                            <span className="summarytext">Estimated Shipping</span>
                            <span className="summaryprice">Rs 180</span>
                            </div>
                            <div className="summaryitem">
                            <span className="summarytext"> Shipping Discount</span>
                            <span className="summaryprice">Rs - 100</span>
                            </div>
                            <div className="summaryitem total">
                            <span className="summarytext">Total</span>
                            <span className="summaryprice">Rs 2080</span>

                        </div>
                        <button className="check">Check Out Now</button>
                    </div>
                    
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Cart
