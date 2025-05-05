import React from 'react'


const ContactSec1Card = ({ img, title }) => {
    return (
        <>
            <div className="col-lg-4">
                <div className="d-flex gap-2 pe-5 py-lg-5 py-3">
                    <div className="align-content-center">
                        <span
                            className='fs-4 px-2 pt-1 pb-2 rounded-2 text-light' style={{ backgroundColor: "#3b5d50" }}>
                            {img}
                        </span>
                    </div>
                    <div className="align-content-center">
                        <p className='my-0 small text-black text-opacity-75'>{title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSec1Card