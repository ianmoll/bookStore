import React from "react";
import lists from '../assets/lists.json'
import {Link} from  'react-router-dom'

import Cards from './Cards'
function Course() {
  return (
    <>
      <div className="container px-4 mx-auto max-w-screen-2xl md:px-20 ">
        <div className="items-center justify-center text-center mt-28">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            sapiente error natus quam obcaecati modi deserunt corrupti doloribus
            eos, dolores nobis reprehenderit enim cupiditate laboriosam
            nesciunt. Veritatis vero vitae at.
          </p>
          <Link to="/">
          <button className="px-4 py-2 mt-4 text-white duration-300 bg-pink-500 rounded-md hover:bg-pink-700">Back</button>
          </Link>
          
        </div>
        <div className="grid grid-cols-1 my-4 mt-12 md:grid-cols-3">
          {
           lists.map((item) =>(
            <Cards key={item.id} item={item}/>
           ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
