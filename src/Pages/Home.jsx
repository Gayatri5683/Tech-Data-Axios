import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { tech } from '../Services/Api'

const Home = () => {
    const [techItems, setTechItems] = useState([])
    useEffect(() => {
        const getTechData = async () => {
            const data = await tech();
            setTechItems(data.slice(0, 3));
        };
        getTechData();
    }, []);
  return (
    <div className='p-4'>
        <div className='bg-red-300 text-black p-5 mt-10 text-center text-2xl font-bold'>
            Welcome to Our Tech Heaven
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {techItems.map(TechData => (
                <div key={TechData._id} className='border text-black px-4 py-2 rounded mt-4'>
                    <img src={TechData.image} alt={TechData.title} className='w-full h-50 object-cover'/>
                    <div className='p-4'>
                        <h2 className='text-lg font-semibold mt-2'>{TechData.title}</h2>
                        <h3 className='text-lg font-semibold '>{TechData.brand}</h3>
                        <p className='text-sm text-gray-800'><b>${TechData.price}</b></p>
                        <p className='text-sm text-gray-600 line-through'>${TechData.oldPrice}</p>
                        {/* <p className='text-sm text-gray-600'> {TechData.ratings}</p> */}
                    </div>
                    <Link to={`/tech/${TechData._id}`} className='bg-red-400 text-black px-4 py-2 rounded mt-4 block text-center'>
                        View Details
                    </Link>
                </div>
                ))}
        </div>
        <div className='text-center mt-6'>
            <Link to='/techData' className='bg-red-400 text-black px-4 py-2 rounded'>
            View All Data
            </Link>
        </div>
    </div>
  )
}

export default Home