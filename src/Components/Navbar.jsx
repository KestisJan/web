import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../Style/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {

    const [showNavBar, setNavBar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setNavBar(false)
    },[location])


  return (
    <div className='navbar' id={showNavBar ? 'open' : 'close'}>
        <div className='navbutton'>
            <button onClick={() => {setNavBar((prev) => !prev)}}><ReorderIcon/></button>
        </div>
        <div className='links'>
            <Link to={'/'}> Home </Link>
            <Link to={'/projects'}> Projects </Link>
            <Link to={'/experience'}> Experience </Link>
        </div>
    </div>

  )
}

export default Navbar