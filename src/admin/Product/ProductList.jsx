import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiURL from '../../utils/api'
import { CiEdit, CiTrash, CiCirclePlus } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            await axios.get(`${apiURL.productAPI}`)
                .then(response => setProducts(response.data.products))
                .catch(error => console.log(error))
        }

        getProducts()
    }, [])

    const deleteHandler = async (id) => {
        try {
          await axios.delete(`${apiURL.productAPI}/${id}`)
          toast.success('Məhsul silindi!')
          setProducts(prevData => prevData.filter(item => item._id !== id));
        } catch (error) {
          toast.error('Xəta baş verdi!' + error.message)
        }
      }

    return (
        <div>
            <div className="container">
                <div className='d-flex justify-content-between align-items-center mb-4'>
                <h4>Bütün məhsullar ({products.length})</h4>
                <Link to='/manage/products/add' className='btn btn-primary btn-sm'><CiCirclePlus /> Yeni məhsul</Link>
                </div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Şəkli</th>
                            <th>Adı</th>
                            <th>Qiyməti</th>
                            <th>Endirimli qiyməti</th>
                            <th>Sayı</th>
                            <th>Əməliyyatlar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map(item => {
                                return (
                                    <tr style={{ verticalAlign: "middle" }}>
                                        <td>
                                            <img style={{width: '150px'}} src={item.thumbnail} alt="" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            {
                                                item.discountPercentage > 0 ? <p><del>{item.price} ₼</del> <span>{item.price - ((item.price * item.discountPercentage) / 100).toFixed(2)} ₼</span></p> : <p>{item.price} ₼</p>
                                            }
                                        </td>
                                        <td>{item.stock}</td>
                                        <td>
                                            <button className='btn btn-sm btn-warning'><CiEdit /></button>
                                            <button onClick={() => deleteHandler(item.id)} className='btn btn-sm btn-danger ms-2'><CiTrash /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    )
}

export default ProductList