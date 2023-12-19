import React, { useContext } from 'react'
import './home.css'
import { ThemeContext } from '../../context/ThemeContext'

const HomePage = () => {
  const data = useContext(ThemeContext)
  return (
    <div>
      <h1>Current Theme: {data.theme}</h1>
      <span>0</span>
    </div>
  )
}

export default HomePage