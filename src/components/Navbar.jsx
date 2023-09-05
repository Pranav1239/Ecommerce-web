import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import {useSelector } from 'react-redux/es/hooks/useSelector'

const Navbar = () => {
  const items = useSelector((state)=> state.cart);
  return (
    <>
    <header>
    <nav>
        <ul className="Navbar">
            <li>
               <Link to="/"><i className="fa-solid fa-house"></i> Home</Link>
            </li>
            <li>
                <Link to="/Products"><i className="fa-solid fa-shop"></i> Products</Link>
            </li>
            <li>
                <Link to="/Contact"><i className="fa-solid fa-address-book"></i> Contact</Link>
            </li>
        </ul>
    </nav>
            <li>
            <Link to="/Login_register" id='Login'>
              <i class="fa-solid fa-right-to-bracket"></i>
              </Link>
      <Link to="/Cart" id='Cart'>
        <i className="fa-solid fa-cart-shopping">   {items.length}</i>
        </Link>
            </li>

</header>
    </>
  )
}

export default Navbar