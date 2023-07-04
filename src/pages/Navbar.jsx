import React from "react";
import { NavLink } from 'react-router-dom'
const Navbar = () =>{
    return(
      <>
        <nav class="navbar py-0 navbar-expand-lg bg-light">
          <div class="container-fluid bg-danger p-2">
            {/* <NavLink class="navbar-brand text-light fw-bold" to="#">Navbar</NavLink> */}
            <div className="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                <li class="nav-item p-3">
                  <NavLink exact activeClassName='active' style={{color: "#fff" , textDecoration:"none"}}  class="nav-link active text-light" aria-current="page" to="/">Home</NavLink>
                </li>
                <li class="nav-item p-3">
                  <NavLink exact activeClassName='active' style={{color: "#fff" , textDecoration:"none"}}   class="nav-link text-light" to="/about">About Us</NavLink>
                </li>
                <li class="nav-item p-3">
                  <NavLink exact activeClassName='active'  style={{color: "#fff" , textDecoration:"none"}}  class="nav-link text-light" to="/contact">Contact Us</NavLink>
                </li>
                <li class="nav-item p-3">
                  <NavLink exact activeClassName='active'  style={{color: "#fff" , textDecoration:"none"}}  class="nav-link text-light" to="/services">Services</NavLink>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-light text-light" type="submit">Search</button>
              </form>
            </div>
            </div>
          </div>
        </nav>
      </>
);
}
export default Navbar;