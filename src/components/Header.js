import React from 'react'
import netflixlogo from '../utils/Netflix_Logo_PMS (1).png'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img src= {netflixlogo} alt='logo' className='w-44' />
    </div>
  )
}

export default Header