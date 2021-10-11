import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import "./Product.css"

const Product = ({item}) => {
    return (
        <div className="procontainer">
        
         <div className="circle"></div>
         <img className="proimg" src={item.img}></img>
         <div className="proinfo">
             <div className="proicon">
                 <ShoppingCartOutlined/>
             </div>
             <div className="proicon">
                 <SearchOutlined/>
             </div>
             <div className="proicon">
                 <FavoriteBorderOutlined/>
             </div>
         </div>
        </div>
    )
}

export default Product;
