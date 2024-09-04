import React from 'react'

const PhilosphyItem = ({icon,title,about}) => {


    return (
        <div className='philosophy-item'>
            <div>
                <box-icon name={icon} type='solid' color='#a335c7' ></box-icon>
            </div>
            <div>
                {title}
            </div>
            <div>
                {about}
            </div>
        </div>
    )
}

export default PhilosphyItem