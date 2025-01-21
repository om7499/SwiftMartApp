import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=''>
      {/* Footer */}
      <div className="bg-secondary text-white py-4 h-25 ">
        <div className=" text-center">
        <p>&copy; {new Date().getFullYear()} SwiftMart. All rights reserved.</p>
          <p>
            <NavLink to={"/"} className="text-white me-2">
              Privacy Policy
            </NavLink>
            | 
            <NavLink to={"/contact"} className="text-white ms-2">
              Contact Us
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
