import React from 'react'
import lists from '../assets/lists.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
  const filterData = lists.filter((data) => data.category === 'Free')
  console.log(filterData)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
    <div className='container flex flex-col px-4 mx-auto my-10 max-w-screen-2xl md:px-20 md:flex-row'>
   <div>
   <h1 className='text-xl font-bold '>Free Offered Courses</h1>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, officiis provident culpa maiores ullam sit vero obcaecati libero ipsa quidem.</p>
   </div>

   </div>
   
    <div className='container flex flex-row px-4 mx-auto my-10 max-w-screen-2xl md:px-20 md:flex-col '>
    
      <Slider {...settings}>
      {
        filterData.map((item) =>(
          <Cards item= {item} key={item.id}/>
        ))
      }
      </Slider>
      
   
  
    </div>
    
    </>
  )
}

export default Freebook