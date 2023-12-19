import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiURL from '../../utils/api'
import { Link } from 'react-router-dom'
import './category.css'

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            await axios.get(`${apiURL.productAPI}/categories`)
            .then(response => setCategories(response.data))
            .catch(error => console.log(error))
        }

        getCategories()
    }, [])
  return (
    <div className='category-list'>
        <div className="container">
           <div className="category-all">
           {
                categories && categories.map(item => {
                    return(
                        <div className="category-item">
                            <Link>{item}</Link>
                        </div>
                    )
                })
            }
           </div>
        </div>
    </div>
  )
}

export default CategoryList