import React, {useEffect} from 'react'
import Login from './Components/login-page/Login';
import "./App.css";
import "../src/Styles/main.css"
import { Route, Routes, useLocation} from 'react-router-dom';
import Products from './Components/Products';
import ProductDetails from './Components/productDetails';
import Users from "./Components/Users.jsx"
import Header from './Components/Header.jsx';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const navigate = useNavigate();
  const location =useLocation()

  useEffect(() => {
    if(!localStorage.getItem("access-token")){
      navigate("/")
    }
  },[location.pathname])

  return (
<>
        {
          location.pathname !== '/' ? <Header /> : ""
        }  
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/Users" element={<Users />} />
      </Routes>
</>

  )
}

export default App