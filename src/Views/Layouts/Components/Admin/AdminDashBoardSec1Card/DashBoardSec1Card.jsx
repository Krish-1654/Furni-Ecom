import React from 'react'
import { Link } from 'react-router-dom'

const DashBoardSec1Card = ({Title,Count,Visit,Path}) => {
    return (
        <>
            <div className="col-md-3">
                <div class="card my-3 mx-lg-3 border-black border-3 shadow-sm">
                    <div class="card-body text-dark fw-bold">
                        <p class="card-title h4 text-truncate">{Title}</p>
                        <p class="card-text fs-5 text-truncate">{Count}</p>
                        <Link to={Path} className='text-black fw-bold text-truncate'>{Visit}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoardSec1Card
