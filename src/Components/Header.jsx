import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system';

const Header = () => {
  return (
    <Box className='Header'>
        <a href='/Products' className='Logo'>DIGITINARY</a>
        <div className='pages'>
            <Link to="/Products" className="Home-page">Home Page</Link>
            <Link to="/Users" className='User-page'>Users</Link>
        </div>
    </Box>
  )
}
export default Header