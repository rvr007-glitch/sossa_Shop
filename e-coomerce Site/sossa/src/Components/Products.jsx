import React, { useEffect, useState } from 'react'
import Product from "./Product"
import "./Products.css"
import { popularProducts } from '../dataitems'
import axios from "axios"
const Products = ({ cat, filters, sort }) => {
    const [products, setproducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : `http://localhost:5000/api/products`);
                setproducts(res.data);
            }
            catch (err) { }
        }
        getProducts()
    }, [cat]);
    useEffect(() => {
        cat &&
            setfilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);
    return (
        <div className="proscontainer">
         {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
        </div>
    )
}

export default Products