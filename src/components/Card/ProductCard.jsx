import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    const {id, title, price, discountPercentage, thumbnail,category} = props.data
    return (
        <div className='col-lg-3'>
            <div class="card">
                <img src={thumbnail} class="card-img-top" alt="..." />
                <span className='category-span'>{category}</span>
                    <div class="card-body">
                        <Link to={`/products/${id}  `}>{title.length > 20 ? title.slice(0,20) + "..." : title}</Link>
                        {
                            discountPercentage > 0 ? <p><del>{price} ₼</del> <span>{price - ((price * discountPercentage) / 100).toFixed(2)} ₼</span></p> : <p>{price} ₼</p>
                        }
                        <button className='btn btn-success w-100'>Add to cart</button>
                    </div>
            </div>
        </div>
    )
}

export default ProductCard