import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiURL from '../../utils/api'
import { CiRead, CiTrash } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';

const Message = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getMessages = async () => {
      await axios.get(`${apiURL.messageAPI}/all`)
      .then(response => setMessages(response.data))
      .catch(error => console.log(error))
    }

    getMessages()
  }, []) 


  const deleteHandler = async (id) => {
    try {
      await axios.delete(`${apiURL.messageAPI}/${id}`)
      toast.success('Mesaj silindi!')
      setMessages(prevData => prevData.filter(item => item._id !== id));
    } catch (error) {
      toast.error('Xəta baş verdi!' + error.message)
    }
  }

  const statusHandler = async (id) => {
    try {
      await axios.put(`${apiURL.messageAPI}/${id}`, { status: true })
      toast.success('Mesaj oxundu!')
      setMessages((prevData) =>
      prevData.map((item) =>
          item._id === id ? { ...item, status: true } : item
      )
  );
    } catch (error) {
      toast.error('Xəta baş verdi!' + error.message)
    }
  }

  return (
    <div>
      <div className="container">
        <h4>Bütün mesajlar ({messages.length})</h4>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Ad və soyad</th>
              <th>Telefon</th>
              <th>Mesaj</th>
              <th>Status</th>
              <th>Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody>
              {
                messages && messages.map(item => {
                  return(
                    <tr style={{verticalAlign: "middle"}}>
                      <td>{item.username}</td>
                      <td>{item.mobile}</td>
                      <td>{item.description}</td>
                      <td className={item.status ? 'text-success' : 'text-danger'}>{item.status ? 'Oxunmuş' : 'Oxunmamış'}</td>
                      <td>
                        <button onClick={() => statusHandler(item._id)} className='btn btn-sm btn-warning'><CiRead /></button>
                        <button onClick={() => deleteHandler(item._id)} className='btn btn-sm btn-danger ms-2'><CiTrash /></button>
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

export default Message