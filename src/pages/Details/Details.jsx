import React, { useEffect, useState } from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import apiURL from '../../utils/api'

const Details = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [activeImage, setActiveImage] = useState()

    useEffect(() => {
        const getProduct = async () => {
            await axios.get(`${apiURL.productAPI}/${id}`)
                .then(response => setProduct(response.data))
                .catch(error => console.log(error))
        }

        getProduct()
    }, [])

    const imageHandler = (src) => {
        setActiveImage(src)
    }

    return (
        <div className='container py-5'>
            {
                product ? <div className="row">
                    <div className="col-lg-5">
                        <div className="item-images">
                            <div className="top">
                                <img src={activeImage ? activeImage : product.thumbnail} alt="" />
                            </div>
                            <div className="bottom">
                                {
                                    product.images.length > 0 && product.images.map(item => {
                                        return (
                                            <img onClick={() => imageHandler(item)} src={item} alt="" />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        {
                            product.discountPercentage > 0 ? <p><del>{product.price} ₼</del> <span>{product.price - ((product.price * product.discountPercentage) / 100).toFixed(2)} ₼</span></p> : <p>{product.price} ₼</p>
                        }
                        <span>Rating: {product.rating} / 5</span>
                    </div>
                </div> : '404 Not Found'
            }
        </div>
    )
}

export default Details