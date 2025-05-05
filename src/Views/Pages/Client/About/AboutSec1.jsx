import React from 'react'
import AboutSec1Card from '../../../Layouts/Components/Client/AboutSec1Card/AboutSec1Card'

const AboutSec1 = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="py-5 me-5">
                                <div className="py-5 me-5">
                                    <p className='h1 fw-medium text-dark'>Why Choose Us</p>
                                    <p className='text-dark text-opacity-75 small'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                    </p>
                                </div>
                                <div className="">
                                    <div className="row">
                                        <AboutSec1Card img={"https://themewagon.github.io/furni/images/truck.svg"} title={"Fast & Free Shipping"} />
                                        <AboutSec1Card img={"https://themewagon.github.io/furni/images/bag.svg"} title={"Easy to Shop"} />
                                        <AboutSec1Card img={"https://themewagon.github.io/furni/images/support.svg"} title={"24/7 Support"} />
                                        <AboutSec1Card img={"https://themewagon.github.io/furni/images/return.svg"} title={"Hassle Free Returns"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 align-content-center">
                            <div className="py-5">
                                <div className="p-4">
                                    <img src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg" className='img-fluid rounded rounded-5' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSec1
