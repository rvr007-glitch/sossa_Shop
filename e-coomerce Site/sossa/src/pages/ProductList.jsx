import React, { useState } from 'react'
import { useLocation } from 'react-router'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import "./ProductList.css"

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setfilters] = useState({});
    const [sort, setsort] = useState("newest");
    const handleFilters = (e) => {
        const value = e.target.value;
        setfilters({
            ...filters,
            [e.target.name]: value,
        })

    }

    return (
        <div className="plcontainer">

            <Navbar />
            <Announcement />
            <h1 className="pltitle">Dresses</h1>
            <div className="filtercontainer">
                <div className="filter"><span className="FilterText">Filter Products:</span>
                    <select name="color" onChange={handleFilters}>
                        <option disabled >Color</option>
                        <option>white</option>
                        <option>black</option>
                        <option>yellow</option>
                        <option>red</option>
                        <option>blue</option>
                        <option>green</option>
                        <option>white</option>
                    </select>

                    <select name="size" onChange={handleFilters}>
                        <option disabled >Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>L</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>

                    </select>
                </div>
                <div className="filter"><span className="FilterText">Sort Products:</span>
                    <select onChange={e => setsort(e.target.value)}>
                        <option value="newest" >Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc" >Price (dsc)</option>
                    </select>


                </div>

            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList
