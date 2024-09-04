import React from 'react'
import contact from '../assets/contact.jpg'
import Book from '../components/Book'
import Schedule from '../components/Schedule'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-first'>
        <div className='contact-img-container'>
          <img src={contact} alt="contact pic" className='contact-img' />
        </div>
        <div className='contact-data'>
          <h1 >Contact</h1>

          <p>Here you can find answers on frequently asked questions. If you cannot find the answer, feel free to contact us via email or phone.We would love hearing from you and moreover meeting you in person. Below you can find all contact details. See you soon!</p>

        </div>
      </div>
      <div className='contact-second'>
        
        <Schedule/>
         <div style={{display:"flex", flexDirection:"column"}}>
          <Book />
        </div>
      </div>
    </div>
  )
}

export default Contact

