import React from 'react'

const ShopSec2 = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="container py-4">
                    <div className="row">
                        <p className='h3 text-uppercase text-center py-4 border-top border-bottom'>All Products</p>
                        <p className='text-end py-2'>
                            <input type="search" className='form-control rounded-4 border-2 shadow-none my-2 border-black' placeholder='Search Here' />
                            <select name="" className='bg-light rounded-4 border-2 p-2 fw-bold'>
                                <option value="" className='fw-bold' selected>Sort By</option>
                                {/* <option value="" selected>Sort By Default</option> */}
                                <option value="" className='fw-bold'>Sort By Low Price</option>
                                <option value="" className='fw-bold'>Sort By High Price</option>
                            </select>
                        </p>
                        <div className="col-lg-3 col-md-4">
                            <div class="card border-0 text-center bg-transparent">
                                <img src='https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/WEWB30124NEW/WEWB7872SUPOPLLEOR2/WEWB7872SUPOPLLEOR2_1.jpg?tr=w-1080' class="card-img-top bg-transparent border-0 rounded-5 p-3 img-fluid img-thumbnail" alt="..." />
                                <div class="card-body">
                                    <p class="card-title h6">King Storage Engineered Wood Bed</p>
                                    <p className='h5 fw-bolder'>₹ 23,950</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div class="card border-0 text-center bg-transparent">
                                <img src='https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Nico_Wing_Chair/WWCHRNICOFRGN/WWCHRNICOFRGN_LS_1.jpg?tr=w-1080' class="card-img-top bg-transparent border-0 rounded-5 p-3 img-fluid img-thumbnail" alt="..." />
                                <div class="card-body">
                                    <p class="card-title h6">Nicco Wing Chair</p>
                                    <p className='h5 fw-bolder'>₹ 21,857</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div class="card border-0 text-center bg-transparent">
                                <img src='https://ik.imagekit.io/2xkwa8s1i/img/sofa-sets/napper/regular/lifestyle/FOBL.jpg?tr=w-1080' class="card-img-top bg-transparent border-0 rounded-5 p-3 img-fluid img-thumbnail" alt="..." />
                                <div class="card-body">
                                    <p class="card-title h6">Napper Sofa</p>
                                    <p className='h5 fw-bolder'>₹ 17,590</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopSec2