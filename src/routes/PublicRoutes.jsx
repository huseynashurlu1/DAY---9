import React from 'react'
import Layout from '../layout/Layout'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/Index/HomePage'
import Contact from '../pages/Contact/Contact'
import Product from '../pages/Product/Product'
import Details from '../pages/Details/Details'

const PublicRoutes = () => {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/products' element={<Product />}/>
            <Route path='/products/:id' element={<Details />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </Layout>
  )
}

export default PublicRoutes