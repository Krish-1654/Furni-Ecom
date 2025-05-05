import React from 'react'
import Layout from '../Layout'

import { IoAddCircleSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import ProductModal from '../../../Layouts/Components/Admin/AdminProductModal/ProductModal';

const ProductList = () => {
    return (
        <>
            <Layout>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row py-2 border-top border-bottom border-2 my-2">
                            <div className="col-6 align-content-center">
                                <p className='m-0 h5 fw-bolder'>Products</p>
                            </div>
                            <div className="col-6 align-content-center text-end">
                                <button className='btn btn-outline-success fw-bold'><span className='d-md-inline-block d-none' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Products</span> <span><IoAddCircleSharp /></span></button>
                                <ProductModal/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 table-responsive">
                                <div className="rounded-3 overflow-hidden overflow-scroll adminprotable">
                                    <table className='table table-borderless table-striped align-middle text-nowrap text-center'>
                                        <thead className='table-dark'>
                                            <tr className='text-uppercase'>
                                                <th>Id</th>
                                                <th>Product Img</th>
                                                <th>Product title</th>
                                                <th>product Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className='table-light'>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <img src="https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Nico_Wing_Chair/WWCHRNICOFRGN/WWCHRNICOFRGN_LS_1.jpg?tr=w-1080" className='img-thumbnail img-fluid' style={{ maxWidth: "80px" }} alt="" />
                                                </td>
                                                <td>
                                                    <p>Nicco Wing Chair</p>
                                                </td>
                                                <td>
                                                    <p>₹ <span>21,857</span></p>
                                                </td>
                                                <td>
                                                    <button className='btn btn-outline-warning mx-2'><span><FiEdit /></span></button>
                                                    <button className='btn btn-outline-danger mx-2'><span><MdDelete /></span></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <img src="https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Nico_Wing_Chair/WWCHRNICOFRGN/WWCHRNICOFRGN_LS_1.jpg?tr=w-1080" className='img-thumbnail img-fluid' style={{ maxWidth: "80px" }} alt="" />
                                                </td>
                                                <td>
                                                    <p>Nicco Wing Chair</p>
                                                </td>
                                                <td>
                                                    <p>₹ <span>21,857</span></p>
                                                </td>
                                                <td>
                                                    <button className='btn btn-outline-warning mx-2'><span><FiEdit /></span></button>
                                                    <button className='btn btn-outline-danger mx-2'><span><MdDelete /></span></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <img src="https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Nico_Wing_Chair/WWCHRNICOFRGN/WWCHRNICOFRGN_LS_1.jpg?tr=w-1080" className='img-thumbnail img-fluid' style={{ maxWidth: "80px" }} alt="" />
                                                </td>
                                                <td>
                                                    <p>Nicco Wing Chair</p>
                                                </td>
                                                <td>
                                                    <p>₹ <span>21,857</span></p>
                                                </td>
                                                <td>
                                                    <button className='btn btn-outline-warning mx-2'><span><FiEdit /></span></button>
                                                    <button className='btn btn-outline-danger mx-2'><span><MdDelete /></span></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <img src="https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Nico_Wing_Chair/WWCHRNICOFRGN/WWCHRNICOFRGN_LS_1.jpg?tr=w-1080" className='img-thumbnail img-fluid' style={{ maxWidth: "80px" }} alt="" />
                                                </td>
                                                <td>
                                                    <p>Nicco Wing Chair</p>
                                                </td>
                                                <td>
                                                    <p>₹ <span>21,857</span></p>
                                                </td>
                                                <td>
                                                    <button className='btn btn-outline-warning mx-2'><span><FiEdit /></span></button>
                                                    <button className='btn btn-outline-danger mx-2'><span><MdDelete /></span></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot></tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProductList
