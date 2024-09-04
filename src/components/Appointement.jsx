import React from 'react'
import { Link } from 'react-router-dom'
import appointement from '../assets/contact.jpg'
// import Schedule from './Schedule'
import { ScheduleOne, ScheduleTwo } from './Schedule'
const Appointement = () => {
    return (
        <div className='contact-container'>
            <div className="first contact-first">
                <div className="contact-img-container">
                    <img src={appointement} alt="" className="contact-img" />
                </div>
                <div className="contact-data">
                    <h1>Book an Appointement</h1>
                </div>
            </div>
            <div className="second">
                <div className="second-first">
                    <div className="second-first-first">
                        <form action="">
                            <Link className='service-item'>
                                <div><box-icon color="#6e09a8" type='solid' animation='fade-left' rotate='180' name='shopping-bag'></box-icon></div>
                                <div>
                                    <h3>Service-Selection</h3>
                                </div>
                                <input type="checkbox" />
                            </Link>
                            <Link className='service-item'>
                                <div><box-icon name='timer' color="#6e09a8" animation='fade-left' rotate='180' type="solid"></box-icon></div>
                                <div>
                                    <h3>Date-time</h3>
                                </div>
                                <input type="checkbox" />
                            </Link>
                            <Link className='service-item'>
                                <div><box-icon name='info-circle' color="#6e09a8" animation='fade-left' rotate='180' type='solid' ></box-icon></div>
                                <div>
                                    <h3>Your information</h3>
                                </div>
                                <input type="checkbox" />
                            </Link>
                            <Link className='service-item'>
                                <div><box-icon name='wallet-alt' type='solid' color="#6e09a8" animation='fade-left' rotate='180' ></box-icon></div>
                                <div>
                                    <h3>Payments</h3>
                                </div>
                                <input type="checkbox" />
                            </Link>
                        </form>
                    </div>
                    <div className="second-first-second">
                        <div className='service-one'>
                            <h3>Service-selection</h3>
                        </div>
                        <div className='service-two'>
                            <div className='service-two-services'>
                                <label htmlFor=""  defaultChecked aria-required>Service</label>
                                <select name="" id="" required>
                                    <option value="">
                                        Select Service
                                    </option>
                                    <option value="">
                                        Hair
                                    </option>
                                    <option value="">
                                        Color
                                    </option>
                                    <option value="">
                                        Beard
                                    </option>
                                    <option value="">
                                        Treatment
                                    </option>
                                </select>
                            </div>
                            <div className='service-two-services'>
                                <label htmlFor="">Employee</label>
                                <select name="" id="">
                                    
                                    <option value="">
                                        Select Employee
                                    </option>
                                    <option value="">
                                        Amit"Lalu"
                                    </option>
                                    <option value="">
                                        Ajit"Raja"
                                    </option>
                                    <option value="">
                                        Manchu
                                    </option>
                                    <option value="">
                                        Rahul
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-second">
                    {/* <Schedule /> */}
                    <div className='anti-location-container'>
                        <div className='location'>
                            <p>Branch-1</p>
                        </div>
                        <div className='anti-location-content'>
                            <ScheduleOne />
                        </div>
                    </div>
                    <div className="anti-location-container">
                        <div className='location'>
                            <p>Branch-2</p>
                        </div>
                        <div className='anti-location-content'>
                            <ScheduleTwo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointement
