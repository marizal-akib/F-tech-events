/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Services = ({service}) => {
    console.log(service);
    const {id,name,image,price,description} = service;
    return (

        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={image} alt="name" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <Link to={`/service/${id}`}>
            <button className="btn  hover:bg-red-500 bg-red-700 bg-opacity-60 text-white border-fuchsia-950">Learn More</button>
            </Link>
          </div>
        </div>
      </div>

    );
};

export default Services;