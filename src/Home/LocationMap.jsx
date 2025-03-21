import React from 'react'
import { Link } from 'react-router-dom'
const title = "More Then 60,000 Customers";


const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";
const clientsList = [
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    ]
const LocationMap = () => {
  return (
    <div className='clients-section padding-tb style-2'>
        <div className='container'>
            <div className='section-header text-center'></div>
            <h2 className='title'>{title}</h2>
            <p>{desc}</p>

            

        </div>
        {/* Main Content */}
          <div className='section-wrapper'>
               <div className='clients'>
                {
                    clientsList.map((val,i) => (
                        <div key={i} className='client-list'>
                            <Link to ="/sign-up" className="client-content">
                            <span>{val.text}</span></Link>
                            <div className='client-thumb'>
                                <img src={val.img} alt="" />

                            </div>
                        </div>
                    ))
                }

               </div>
          </div>
    </div>
  )
}

export default LocationMap
