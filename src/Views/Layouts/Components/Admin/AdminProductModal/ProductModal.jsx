import React from 'react'

const ProductModal = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content bg-dark text-light rounded-4">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Product details</h1>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className='text-start'>
                                <div className="my-3">
                                    <label className='form-label fw-bold'>Enter Product Title</label>
                                    <input type="text" className='form-control shadow-none' />
                                </div>
                                <div className="my-3">
                                    <label className='form-label fw-bold'>Enter Product Img</label>
                                    <input type="file" className='form-control shadow-none' />
                                </div>
                                <div className="my-3">
                                    <label className='form-label fw-bold'>Enter Product Price</label>
                                    <input type="number" className='form-control shadow-none' />
                                </div>
                                <div className="my-3">
                                    <button className='btn form-control btn-outline-success text-uppercase fw-bold'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductModal