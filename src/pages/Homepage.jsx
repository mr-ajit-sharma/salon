import React from 'react'
import home from '../assets/home.jpg'
import Book from '../components/Book'
const Homepage = () => {
  return (
    <div className='home-container'>
      <div className='home'>
        <img src={home} className='home-image' alt="home" />
        <p className='home-summary'>Professional cares since 2000</p>
        <h1 className='home-title'>Our impression is <br /> your expression</h1>
        <div className="home-btn-position">
          <Book />
        </div>
      </div>
    </div>
  )
}

export default Homepage