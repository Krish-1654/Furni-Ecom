import React from 'react'

const HeroSec = ({ Title, Desc, img}) => {
    return (
        <>
            <section>
                <div className="container-fluid text-light" style={{ backgroundColor: "#3b5d50" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="py-lg-5 px-3 mt-5">
                                    <div className="py-md-4">
                                        <p className='display-4 fw-bold'>{Title}</p>
                                        <p className='small text-light text-opacity-50 lh-lg'>{Desc}</p>
                                        <div className="">
                                            <button className='btn btn-warning fw-bold text-black text-opacity-75 px-4 py-2 text-uppercase rounded-pill'>
                                                Shop Now
                                            </button>
                                            <button className='btn btn-outline-light bg-transparent text-light fw-bold ms-2 text-opacity-75 px-4 py-2 text-uppercase rounded-pill'>
                                                Explore
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-content-center">
                                <div className="">
                                    <div className="">
                                        <img src={img} className='img-fluid' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSec
