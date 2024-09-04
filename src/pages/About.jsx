import React from 'react'
// Link
import about from '../assets/contact.jpg'
import Philosophies from '../components/Philosophies'
import Book from '../components/Book'
import beard from '../assets/BeardLogo.png'
import first from '../assets/intro1.jpg'
import second from '../assets/intro2.jpg'
import third from '../assets/intro3.jpg'
import fourth from '../assets/intro4.jpg'
import fifth from '../assets/intro5.jpg'
const About = () => {
  return (
    <div className='main-container' id='about'>
      <div className="first contact-first">
        <div className="landing-img-container">
          <img src={about} alt="" className="landing-img" />
        </div>
        <div className="contact-data">
          <h1 className='title'>About</h1>
          <p>
            Our main goal was to create the best beauty studio in the world. Can there be any compromises in the best studio in the world?
          </p>
        </div>
      </div>
      <div className='flex1 m p main-p'>
        <div className='flex2 w-50'>
          <div>
            <span className='internal-heading'>Introducing</span>
          </div>
          <div>
            <span className='internal-title'>The Amit Hair Dressers Since 2000</span>
            <span></span>
          </div>
          <div>
            <img src={beard} alt="" />
          </div>
          <div>
            <p className='internal-para'>
              Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys' hair. A barber's place of work is known as a "barbershop" or a "barber's". Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.
            </p>
          </div>
          <div>
            <button className='about-btn'>
              More About us
            </button>
          </div>
        </div>
        <div className='main-p'>
          <img className='item-p position1' height={200} width={200} src={first} alt="about demo" />
          <img className='item-p position2' height={200} width={200} src={second} alt="about demo" />
          <img className='item-p position3' height={200} width={200} src={third} alt="about demo" />
          <img className='item-p position4' height={200} width={200} src={fourth} alt="about demo" />
          <img className='item-p position5' height={200} width={200} src={fifth} alt="about demo" />
        </div>
      </div>
      <div className='philosophy-container'>
        <h1>Philosophy</h1>
        <div>
          <Philosophies />
        </div>
        <div>
          <Book />
        </div>
      </div>
    </div>
  )
}

export default About