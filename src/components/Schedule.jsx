import React from 'react'

const Schedule = () => {
  return (
    <div>
      <div className='location-container'>
        <div className='location'>
          <p>Branch-1</p>
        </div>
        <div className='location-content'>
          <ScheduleOne/>
        </div>
      </div>
      <div className='location-container'>
        <div className='location'>
          <p>Branch-2</p>
        </div>
        <div className='location-content'>
          <ScheduleTwo />
        </div>
      </div>
    </div>
  )
}

export const ScheduleOne = () => {
  return (
    <>
      <div className='location-items'>
        <box-icon animation="tada" name='mobile' color="#6e09a8"></box-icon>
        <h3 className='title'>Contact</h3>
        <p><span className='prop'>Phone</span><span className='divider'>: </span><span className='data'>123466789</span></p>
        <p><span className='prop'>Email</span><span className='divider'>: </span><span className='data'>abc@gmail.com</span></p>
      </div>
      <div className='location-items'>
        <box-icon name='time' type='solid' rotate='90' animation='spin' color='#6e09a8' ></box-icon>
        <h3 className='title'>Time</h3>
        <p><span className='prop'>Mon to Fri</span><span className='divider'>: </span><span className='data'>7:00 am<span className='divider'>-</span>11:00 pm</span></p>
        <p><span className='prop'>Sat</span><span className='divider'>: </span><span className='data'>7:30 am<span className='divider'>-</span>10:30 pm</span></p>
        <p><span className='prop'>Sun</span><span className='divider'>: </span><span className='data'>6:30 am<span className='divider'>-</span>11:00 pm</span></p>
      </div>
      <div className='location-items' >
        <box-icon name='location-plus' animation='tada' rotate='90' color='#6e09a8' ></box-icon>
        <h3 className='title'>Location</h3>
        <p className='.para-data'><span className='prop'>Address</span><span className='divider'>: </span><span className='data'>Shop No.2, Amit Hair Dressers, near Hanuman Mandir, Shree ram nagar, Bilalpada,Nallasopara(East) </span><span className='divider'>- </span> <span className="data">401209</span> </p>
      </div>
    </>
  )
}
export const ScheduleTwo = () => {
  return (
    <>
      <div className='location-items'>
        <box-icon animation="tada" name='mobile' color="#6e09a8"></box-icon>
        <h3 className='title'>Contact</h3>
        <p><span className='prop'>Phone</span><span className='divider'>: </span><span className='data'>123466789</span></p>
        <p><span className='prop'>Email</span><span className='divider'>: </span><span className='data'>abc@gmail.com</span></p>
      </div>
      <div className='location-items'>
        <box-icon name='time' type='solid' rotate='90' animation='spin' color='#6e09a8' ></box-icon>
        <h3 className='title'>Time</h3>
        <p><span className='prop'>Mon to Fri</span><span className='divider'>: </span><span className='data'>7:00 am<span className='divider'>-</span>11:00 pm</span></p>
        <p><span className='prop'>Sat</span><span className='divider'>: </span><span className='data'>7:30 am<span className='divider'>-</span>10:30 pm</span></p>
        <p><span className='prop'>Sun</span><span className='divider'>: </span><span className='data'>6:30 am<span className='divider'>-</span>11:00 pm</span></p>
      </div>
      <div className='location-items' >
        <box-icon name='location-plus' animation='tada' rotate='90' color='#6e09a8' ></box-icon>
        <h3 className='title'>Location</h3>
        <p className='.para-data'><span className='prop'>Address</span><span className='divider'>: </span><span className='data'>Shop No.2, Amit Hair Dressers, near Hanuman Mandir, Shree ram nagar, Bilalpada,Nallasopara(East) </span><span className='divider'>- </span> <span className="data">401209</span> </p>
      </div>
    </>
  )
}

export default Schedule