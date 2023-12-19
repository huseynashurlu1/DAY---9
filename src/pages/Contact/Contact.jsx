import React, { useState } from 'react'
import './contact.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import apiURL from '../../utils/api';

// CURRYING
const Contact = () => {
  const [user, setUser] = useState({
    username: '',
    mobile: '',
    description: ''
  })

  const submitHandler = async () => {
    try {
      await axios.post(`${apiURL.messageAPI}/create`, user)
      toast.success('Mesaj göndərildi!')
    } catch (error) {
      toast.error('Xəta baş verdi!' + error.message)
    }
  }

  return (
    <div id='Contact'>
      <div className="container">
          <div className="col-lg-6 mx-auto">
            <div className="contact-form">
              <div className="form-item">
                <label htmlFor="username">Ad və soyad</label>
                <input onChange={(e) => setUser({...user, username: e.target.value})} type="text" placeholder='Ad və soyad' id='username' className='form-control'/>
              </div>
              <div className="form-item">
                <label htmlFor="phone">Telefon</label>
                <input onChange={(e) => setUser({...user, mobile: e.target.value})} type="text" placeholder='Telefon' id='phone' className='form-control'/>
              </div>
              <div className="form-item">
                <label htmlFor="description">Mesaj</label>
                <input onChange={(e) => setUser({...user, description: e.target.value})} type="text" placeholder='Mesajınız' id='description' className='form-control'/>
              </div>
              <div className="form-item">
              <button onClick={submitHandler} className='btn btn-sm btn-success w-100'>Göndər</button>
              </div>
            </div>
          </div>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  )
}

export default Contact