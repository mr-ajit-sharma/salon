import React from 'react'
import ServiceCard from './ServiceCard'
import image1 from '../assets/intro1.jpg'
import image2 from '../assets/intro2.jpg'
import image3 from '../assets/intro3.jpg'
const serviceData=[
  {
    image:image1,
    title:"Barber service"
  },
  {
    image:image2,
    title:"Home service"
  },
  {
    image:image3,
    title:"Cutting service"
  },
]
const ServiceCards = () => {
  return (
    <div className='service-cards'>
      {serviceData.map((item,index)=>(

        <ServiceCard item={item} index={index}/>
      ))}
    </div>
  )
}

export default ServiceCards