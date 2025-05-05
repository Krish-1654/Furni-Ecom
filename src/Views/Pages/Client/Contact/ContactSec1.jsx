import React from 'react'
import ContactSec1Card from '../../../Layouts/Components/Client/ContactSec1Card/ContactSec1Card'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const ContactSec1 = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="container py-3">
                    <div className="row justify-content-center py-5">
                    <div className="col-md-8">
                        <div className="row">
                            <ContactSec1Card img={<CiLocationOn />} title={"43 Raymouth Rd. Baltemoer, London 3910"}/>
                            <ContactSec1Card img={<CiMail />} title={"info@yourdomain.com"}/>
                            <ContactSec1Card img={<FaPhoneAlt />} title={"+1 294 3925 3939"}/>
                        </div>
                        <form className='py-3'>
                            <div className="input-group gap-3 my-3">
                                <input type="text" className='form-control rounded-3 py-2 border-2 shadow-none' placeholder='First Name'/>
                                <input type="text" className='form-control rounded-3 py-2 border-2 shadow-none' placeholder='Last Name'/>
                            </div>
                            <div className="my-3">
                                <input type="email" className='form-control rounded-3 py-2 border-2 shadow-none' placeholder='Email Address'/>
                            </div>
                            <div className="my-3">
                                <textarea name="" className='form-control rounded-3 border-2 shadow-none' rows={4} placeholder='Message'></textarea>
                            </div>
                            <button className='btn fw-bold btn-dark form-control py-2 my-3 rounded-pill'>Send Message</button>
                            
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSec1
