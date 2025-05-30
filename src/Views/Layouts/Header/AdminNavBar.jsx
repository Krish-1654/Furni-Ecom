import React from 'react'
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#3b5d50" }}>
                <div className="container-fluid px-md-5 px-0">
                    <nav class="navbar navbar-expand-lg navbar-dark py-3 fw-bold">
                        <div class="container-fluid">
                            <a class="navbar-brand fs-3 " href="#">Admin</a>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
                                    <li class="nav-item">
                                        <Link to={"/AdminDashBoard"} className='nav-link'>
                                            DashBoard
                                        </Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Products
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-start mt-2 pt-2 bg-light">
                                            <li>
                                                <Link to={"/AdminProductList"} className='nav-link dropdown-item text-black'>Product List</Link>
                                            </li>
                                            <li>
                                                <Link to={"/AdminCategoryList"} className='nav-link dropdown-item text-black'>Category List</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <Link to={"/AdminOrderList"} className='nav-link'>
                                            Order
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to={"/AdminUserList"} className='nav-link'>
                                            User
                                        </Link>
                                    </li>
                                </ul>

                                <ul className='navbar-nav ms-auto mb-2 mb-lg-0 gap-5'>
                                    <li className='nav-item dropdown'>
                                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.theanimedaily.com%2Fwp-content%2Fuploads%2F2022%2F07%2Fsolo-leveling-first-750x417.jpg&f=1&nofb=1&ipt=6b3289b38771d67813e90b5b4fe1bc9a83be909859fecb6130b9bb594b2a8f3c" className='rounded-3' style={{maxWidth:"60px"}} alt="" />
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end mt-2 pt-2 bg-light">
                                            <li>
                                                <Link to={""} className='nav-link dropdown-item text-black'>Profile</Link>
                                            </li>
                                            <li>
                                                <Link to={"/"} className='nav-link dropdown-item text-black'>Log Out</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* <ul class="nav ms-auto mb-2 mb-lg-0 gap-4 me-4 d-lg-none d-flex">
                                <li class="nav-item">
                                    <a class="nav-link text-light fs-4 p-0" aria-current="page" href="#"><FaRegUserCircle /></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light fs-4 p-0" aria-current="page" href="#"><FaCartPlus /></a>
                                </li>
                            </ul> */}
                            <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default AdminNavBar


