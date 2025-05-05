import React from 'react'

const HomeSec1 = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="container py-2">
                    <div className="row py-5">
                        <div className="col-lg-3">
                            <div class="card border-0 bg-transparent">
                                <div class="card-body">
                                    <p class="card-title h3 py-2">Crafted with excellent material.</p>

                                    <p class="card-text small py-2">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                                    <button className='btn btn-dark text-light fw-bold px-4 py-2 rounded-pill'>Explore</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div class="card border-0 text-center bg-transparent">
                                <img src='https://themewagon.github.io/furni/images/product-1.png' class="card-img-top bg-transparent border-0 p-3 img-fluid img-thumbnail" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-title h6">Nordic Chair</p>
                                        <p className='h5 fw-bolder'>₹ 7000</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div class="card border-0 text-center bg-transparent">
                                <img src='https://themewagon.github.io/furni/images/product-2.png' class="card-img-top bg-transparent border-0 p-3 img-fluid img-thumbnail" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-title h6">Kruzo Aero Chair</p>
                                        <p className='h5 fw-bolder'>₹ 9000</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div class="card border-0 text-center bg-transparent">
                                <img src='https://themewagon.github.io/furni/images/product-3.png' class="card-img-top bg-transparent border-0 p-3 img-fluid img-thumbnail" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-title h6">Ergonomic Chair</p>
                                        <p className='h5 fw-bolder'>₹ 5000</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSec1
