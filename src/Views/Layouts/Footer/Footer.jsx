import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <div className="py-5">
                  <p className='h5 text-opacity-75 text-black'> <span><img src="https://themewagon.github.io/furni/images/envelope-outline.svg" alt="" /></span> Subscribe to Newsletter</p>
                  <form className=''>
                    <input type="text" className='form-control border-2 shadow-none mt-3 rounded-pill' placeholder='Enter Your Name'/>
                    <input type="text" className='form-control border-2 shadow-none mt-3 rounded-pill' placeholder='Enter Your Email'/>
                    <button className='btn text-light px-4 fs-5 pb-2 rounded-pill mt-2 form-control' style={{ backgroundColor: "#3b5d50" }}>
                      <FaRegPaperPlane />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 text-end">
                <img src="https://themewagon.github.io/furni/images/sofa.png" className='img-fluid w-50' alt="" />
              </div>
            </div>
          </div>
          <div className="text-center px-3 py-4 border-top border-2">
            <Link to={"/"} className='text-decoration-none text-black fw-bold'>Copyright ©2025. All Rights Reserved. — Designed by Abhi</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
