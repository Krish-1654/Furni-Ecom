import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#3b5d50" }}>
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-dark py-3 fw-bold">
            <div class="container-fluid">
              <a class="navbar-brand fs-3 " href="#">Furni.</a>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
                  <li class="nav-item">
                    <Link to={"/"} className='nav-link'>
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/Shop"} className='nav-link'>
                      Shop
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/About"} className='nav-link'>
                      About us
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/Contact"} className='nav-link'>
                      Contact
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fs-4 p-0" aria-current="page" href="#"><FaRegUserCircle /></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fs-4 p-0" aria-current="page" href="#"><FaCartPlus /></a>
                  </li>
                </ul>
              </div>
              <ul class="nav ms-auto mb-2 mb-lg-0 gap-4 me-4 d-lg-none d-flex">
                <li class="nav-item">
                  <a class="nav-link text-light fs-4 p-0" aria-current="page" href="#"><FaRegUserCircle /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light fs-4 p-0" aria-current="page" href="#"><FaCartPlus /></a>
                </li>
              </ul>
              <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar