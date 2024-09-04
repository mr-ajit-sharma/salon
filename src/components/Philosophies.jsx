import React from 'react'
import PhilosphyItem from './PhilosphyItem'

const Philosophies = () => {
    const data=[
        {
            icon:"leaf",
            title:"Green Beauty",
            about:"All cosmetic forumulas are organic. The majority of all ingredients isnatural."
        },
        {
            icon:"dog",
            title:"Cruelty-Free",
            about:"Even nowadays some cosmetic products are tested on animals. That is not the case for us."
        },
        {
            icon:"injection",
            title:"Professional Care",
            about:"All products we use are professional and have proven effeciency. No compromises."
        },
        {
            icon:"test-tube",
            title:"Non-Toxic Formula",
            about:"Don’t worry, all our nails polishes and other products are non-toxic. We do care about you and our specialists."
        },
        {
            icon:"expand-alt",
            title:"Personalized Experience",
            about:"Each guest is our favourite guest. Come and make sure that our service is exceptional."
        },
        {
            icon:"heart",
            title:"We Love What We Do",
            about:"People that you’ll meet in our studio are doing job they love. Come and make sure there is a difference."
        },
    ]
  return (
    <div className='philosophy-item-container'>
        {
            data.map((item,index)=><PhilosphyItem key={index} icon={item.icon} title={item.title} about={item.about}/>)
        }
    </div>
  )
}

export default Philosophies