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
        <div /* className=' rounded-lg  ' */>
            <img src={techData.image} alt={techData.title} className='w-[40%] h-[40%] object-cover'/>
            <div className='p-4 relative -mt-130 w-[40%] ml-170  ' >
                <h2 className='text-3xl font-bold'>{techData.title}</h2>
                <p className='mt-2'>{techData.description}</p>
                <h3 className='text-lg mt-2 font-semibold'>Brand: {techData.brand}</h3>
                <p className='mt-2 text-lg font-bold'>{techData.category}</p>
                <p className='text-sm mt-2 text-gray-800'><b>Price: ₹</b>{techData.price}</p>
                
                
                {/* <p className='mt-2'>{techData.rating}</p> */}
                </div>
                <div className='mt-20 mb-15 items-center justify-center flex'>
                    <Link to='/' className='bg-red-400 text-black px-4 py-2 rounded'>Go Back</Link>
                </div>
        </div>
    </div>
  )
}

export default TechDetails