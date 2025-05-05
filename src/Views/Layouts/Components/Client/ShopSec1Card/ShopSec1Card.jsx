import React from 'react'

const ShopSec1Card = ({img,desc}) => {
    return (
        <>
            <div className="col-3 text-center py-2">
                <img src={img} className='img-fluid img-thumbnail rounded-5 w-75' alt="" />
                <p className='h5 py-2'>{desc}</p>
            </div>
        </>
    )
}

export default ShopSec1Card
