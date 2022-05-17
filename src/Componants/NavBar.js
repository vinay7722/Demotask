import React from "react";
import '../Componants/Css/Navbar.css'
import userprofile from '../Assets/userprofile.png'
import logo from '../Assets/companylogo.jpg'
import Chat from '../Assets/Vector1.png'
import Notification from '../Assets/Vector.png'

export default function NavBar() {
  return (<>
      <nav className="navbar navbar-expand-lg bg-light nav">
        <div className="container-fluid">
          <img className="img" src={logo} alt="" width="115" height="42"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link activesec font" aria-current="page" href="#">Listings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Bids</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contracts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Payment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <img className="icon" src={Chat} width="24.32" height="25.67" />
            <img className="icon" src={Notification} width="23.37" height="26.71" />
            <img className="icon" src={userprofile} width="42" height="42" />
          </div>
        </div>
      </nav>
    </>
  )
}
