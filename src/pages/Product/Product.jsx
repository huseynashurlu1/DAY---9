import React, { useEffect, useState } from 'react'
import './product.css'
import axios from 'axios'
import apiURL from '../../utils/api'
import ProductCard from '../../components/Card/ProductCard'
import Loader from '../../components/Loader/Loader'

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            await axios.get(`${apiURL.productAPI}`)
            .then(response => setProducts(response.data.products))
            .catch(error => console.log(error))
        }

        getProducts()
    }, [])

    if(products.length === 0) {
        return <Loader />
    }

  return (
    <div className='container py-4'>
        <div className="row gy-4">
            {
                products && products.map(item => {
                    return(
                        <ProductCard data={item}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Product