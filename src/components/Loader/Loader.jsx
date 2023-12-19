import React from 'react'
import './loader.css'

const Loader = () => {
  return (
    <div className='spin-area'>
        <div className="newtons-cradle">
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
        </div>
    </div>
  )
}

export default Loader