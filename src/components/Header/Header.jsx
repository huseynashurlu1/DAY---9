import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import { ThemeContext } from '../../context/ThemeContext'

const Header = () => {
    const data = useContext(ThemeContext)

    const themeHandler = () => {
        data.changeTheme()
    }
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="logo">
                        <Link to='/'>Shop.az</Link>
                    </div>
                </div>
                <div className="col-lg-10">
                    <nav>
                        <NavLink to='/'>Ana səhifə</NavLink>
                        <NavLink to='/products'>Məhsullar</NavLink>
                        <NavLink to='/contact'>Əlaqə</NavLink>
                        <button onClick={themeHandler}>Increase</button>
                        <span>{data.theme}</span>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header