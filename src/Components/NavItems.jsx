import React, { useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo/logo.png'

const NavItems = () => {
    const[menuToggle , setMenuToggle] = useState(false)
    const [socialToggle , setSocialToggle] = useState(false)
    const[headerFixed , setHeaderFixed] = useState(false)

    window.addEventListener('scroll', () => {
        if(window.scrollY > 200)
        {
            setHeaderFixed(true)
        }else{
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}` }>
       {/* header top start */}
       <div className='{`header-top d-md-none ${socialToggle ? "open" : ""}}'>
            <div className="container">
                <div className="header-top-area">
                    <Link to ="/signup" className='lab-btn me-3'><span>Create an Account</span></Link>
                     <Link to ="/login">Login</Link>
                </div>

            </div>
       </div>
       {/* Header Bottom */}
       <div className='header-bottom'>
        <div className='container'>
            <div className='header-wrapper'>
                     {/* logo */}
                     <div className='logo-search-acte'>
                        <div className = "logo">
                               <Link to = {"/"}></Link>
                               <img src={logo} alt="" />
                        </div>

                     </div>
                        {/* menu area  */}
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/">Shop</Link></li>
                                    <li><Link to="/">Blog</Link></li>
                                    <li><Link to="/">About</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                               

                            </div>
                               {/* Sign in / Log in */}
                               <Link to ='sign-up' className='lab-btn me-3 d-none d-md-block'>
                                Create Account
                                </Link>
                                <Link to="/login" className='d-none d-md-block'>
                                Login
                                </Link>
                                {/* Menu Toggle  */}
                                <div  onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                 {/* Social Toggle */}
                                 <div className='ellipsis-bar d-md-none' onClick={()=> setSocialToggle(!socialToggle)}>

                                 <i className="icofont-info"></i>
                                 </div>
                        </div>
            </div>
        </div>
       </div>
    </header>
  )
}

export default NavItems
