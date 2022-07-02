import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <NavbarWrapper>
        <Link to = "/" >Home</Link>
        
        <Link to = "MovieDetail">MovieDetail</Link>
        <Link to = "BookingDetail">BookingDetail</Link>
        <Link to = "Login">Login</Link>
            
        </NavbarWrapper>
    )
}

export default Navbar
