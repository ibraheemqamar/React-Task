import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("access-token");
    navigate("/");
  }
  return (
    <Box className='Header'>
        <div className='child'>
        <a href='/Products' className='Logo'>DIGITINARY</a>
        <div className='pages'>
            <Link to="/Products" className="Home-page">Home Page</Link>
            <Link to="/Users" className='User-page'>Users</Link>
            <a onClick={logOut} className="log-out">Log Out</a>
        </div>
        </div>
    </Box>
  )
}
export default Header