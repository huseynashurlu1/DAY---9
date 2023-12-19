import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

const AdminLayout = (props) => {
  return (
    <div className='admin-layout d-flex'>
      <Sidebar />
      <main className='p-5' style={{width: '80%'}}>
        {props.children}
      </main>
    </div>
  )
}

export default AdminLayout