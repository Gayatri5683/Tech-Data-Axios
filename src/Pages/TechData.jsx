import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TechData = () => {
    const [techItems, setTechItems] = useState([]);
    
    useEffect(() => {
        const getTechData = async () => {
            try {
              const response = await axios.get('https://fakestoreapiserver.reactbd.com/tech');
              setTechItems(response.data);
            }
            catch (error){
              console.error('Error fetching data', error);
            }
            
        };
        getTechData();
    }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Data Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {techItems.map((techData) =>/*  {            
          console.log(techData._id);
            return  */(
          <div /* to={`tech/${techData._id}`}  */
          key={techData._id} 
          className="border p-4 rounded shadow">
            <img src={techData.image} alt={techData.title} className="w-full h-40 object-cover" />
            <div className='p-4'>
                <h2 className="text-lg font-bold mt-2">{techData.title}</h2>
                <h3 className='text-lg '><b>Brand: </b>{techData.brand}</h3>
                <h3 className='text-lg '><b>Category: </b>{techData.category}</h3>
                <p className="text-sm text-gray-800"><b>${techData.price}</b></p>
                {/* <p className='text-sm text-gray-600 line-through'>${techData.oldPrice}</p> */}
             {/*    <p className='text-sm text-gray-600'>{techData.ratings}</p> */}
             <p className="text-sm text-gray-600">
        {techData.isNew ? <span className="text-blue-500 font-semibold">New Arrival!</span> : null}
      </p>
            </div>
            <Link to={`/tech/${techData._id}`} className='bg-red-400 text-black px-4 py-2 rounded mt-4 block text-center'>
            View Details
            </Link>
          </div>
      
))}
      </div>
    </div>
  )
}

export default TechData