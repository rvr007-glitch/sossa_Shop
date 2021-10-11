import React from 'react'
import { categories } from '../dataitems'
import CategoryItem from './CategoryItem'
import './categories.css'
const Categories = () => {
    return (
        <div className="catContainer">
         {categories.map(item=>(
<CategoryItem item={item} key={item.id}/>
         ))}   
        </div>
    )
}

export default Categories
