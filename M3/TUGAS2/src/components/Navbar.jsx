// components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar(){
    const navigate = useNavigate()
    return(
        <>
        <h4>Nav</h4>
        <ul>
            <li><button onClick={()=> navigate('/')}>home</button></li>
            <li><button onClick={()=> navigate('/contact')}>Contact</button></li>
            <li><button onClick={()=> navigate('/about')}>About</button></li>
        </ul>
        </>
    )
}


export default Navbar;
