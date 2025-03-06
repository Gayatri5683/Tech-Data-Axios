import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-red-300 w-full text-black text-center p-4 mt-4'>
        <p>&copy; {new Date().getFullYear()} Data Listing</p>
    </footer>
  )
}

export default Footer