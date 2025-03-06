import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { tech } from '../Services/Api'
import { useState, useEffect } from 'react'


const TechDetails = () => {
    const { id } = useParams();
    /* const techData = tech.find((techData) => String(techData._id) === String(id)); */

    const [techData, setTechData] = useState();

    useEffect(() => {
        const getTechDetails = async () => {
            try {
                const data = await tech(); // Fetch the data
                const foundData = data.find((item) => String(item._id) === String(id));
                setTechData(foundData);
                } 
             catch (error) {
                console.error("Failed to fetch data:", error);
                /* setError("Failed to fetch data."); */ // Update state with error message
            }
        };
        getTechDetails();
    }, [id]);
    
    if (!techData) {
        return <p className='text-center'>Product Not Found</p>
    }

  return (
    <div className='container mx-auto p-4'>
        <div className=' w-full flex justify-center items-center'>
            <img src={techData.image} alt={techData.title} className='w-[40%] h-[40%] object-cover'/>
            <div className='p-4   w-[40%]  ' >
                <h2 className='text-3xl font-bold'>{techData.title}</h2>
                <p className='mt-2'>{techData.description}</p>
                <h3 className='text-lg mt-1'><b>Brand: </b>{techData.brand}</h3>
                <h3 className='text-lg mt-1'><b>Category: </b>{techData.category}</h3>
                <p className='text-sm mt-2 text-gray-800'><b> ${techData.price}</b></p>
                <p className='text-sm mt-2 text-gray-600 line-through'>${techData.oldPrice}</p>
                <p className="text-sm mt-2 ">
        {techData.isNew === true ? <span className="text-blue-500 font-bold">New Arrival!</span> : null}
      </p>
                
                {/* <p className='mt-2'>{techData.rating}</p> */}
                <div className='mt-8'>
                    <Link to='/' className='bg-red-400 text-black px-4 py-2 rounded'>Go Back</Link>
                </div>
                </div>
                
        </div>
    </div>
  )
}

export default TechDetails