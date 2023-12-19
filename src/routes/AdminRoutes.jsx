import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import { Route, Routes } from 'react-router-dom'
import AdminIndex from '../admin/AdminIndex/AdminIndex'
import Message from '../admin/Message/Message'
import ProductList from '../admin/Product/ProductList'
import ProductAdd from '../admin/Product/ProductAdd'

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path='/manage/index' element={<AdminIndex />}/>
        <Route path='/manage/messages' element={<Message />}/>
        <Route path='/manage/products' element={<ProductList />}/>
        <Route path='/manage/products/add' element={<ProductAdd />}/>
      </Routes>
    </AdminLayout>
  )
}

export default AdminRoutes