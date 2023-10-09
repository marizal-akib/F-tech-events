/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Services = ({service}) => {
    console.log(service);
    
const {id,name,image,price,description} = service;    return (
      <div className="border p-2 bg-fuchsia-900 border-fuchsia-700 hover:bg-opacity-10 bg-opacity-30 rounded-xl ">
        
        <div 
        className="card card-compact hover:bg-red-800 text-yellow-50
          bg-red-900 bg-opacity-95 border border-fuchsia-950 shadow-xl h-screen">
        <figure><img className=" w-fit h-64" src={image} alt="name" /></figure>
        <div className="card-body">
          <h2 className="text-center mx-auto card-title text-amber-200">{name}</h2>
          <p className="text-center">{description.slice(0,150)} ...</p>
          <p className="font-semibold ">Price: <span className="text-amber-400">{price}</span></p>
          <div className="card-actions justify-end">
            <Link to={`/service/${id}`}>
            <button className="btn  hover:bg-blue-600 bg-blue-600 bg-opacity-60 text-white border-fuchsia-950">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      </div>


    );
};

export default Services;