import axios from 'axios'
import React, { useState } from 'react'
import apiURL from '../../utils/api'

const ProductAdd = () => {
    const [data, setData] = useState({
        title: '',
        price: '',
        thumbnail: null
    })

    const handleImageChange = (e) => {
        const imageFile = e.target.files
        setData({...data, thumbnail: imageFile})
    }


    const submitHandler = async () => {
        try {
            const formData = new FormData()
            formData.append('title', data.title)
            formData.append('price', data.price)
            formData.append('thumbnail', data.thumbnail)

            await axios.post(`${apiURL.productAPI}/add`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
            })
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='Add-product'>
        <div className="container">
            <div className="contact-form">
              <div className="form-item">
                <label htmlFor="username">Məhsulun adı</label>
                <input onChange={(e) => setData({...data, title: e.target.value})} type="text" placeholder='Ad və soyad' id='username' className='form-control'/>
              </div>
              <div className="form-item">
                <label htmlFor="phone">Şəkli</label>
                <input multiple onChange={handleImageChange} type="file" className='form-control'/>
              </div>
              <div className="form-item">
                <label htmlFor="description">Qiyməti</label>
                <input onChange={(e) => setData({...data, price: e.target.value})} type="text" placeholder='Mesajınız' id='description' className='form-control'/>
              </div>
              <div className="form-item">
              <button onClick={submitHandler} className='btn btn-sm btn-success w-100'>Əlavə et</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductAdd