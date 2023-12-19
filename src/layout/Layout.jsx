import React from 'react'
import Header from '../components/Header/Header'
import CategoryList from '../components/Category/CategoryList'

const Layout = (props) => {
  return (
    <div>
        <Header />
        <CategoryList />
        <main>
            {props.children}
        </main>
    </div>
  )
}

export default Layout