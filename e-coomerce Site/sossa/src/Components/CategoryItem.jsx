import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './categoryitem.css'

const CategoryItem = ({ item }) => {
    return (
        <div className="itemContainer">
            <Link to={`/products/${item.cat}`}>

                <img className="imga" src={item.img} ></img>

                <div className="catinfo">

                    <h1 className="catname">{item.title}</h1>
                    <button className="catbtn">
                        Shop Now
                    </button>

                </div>
            </Link>
        </div>
    )
}

export default CategoryItem
