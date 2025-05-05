import React from 'react'
import DashBoardSec1Card from '../../../Layouts/Components/Admin/AdminDashBoardSec1Card/DashBoardSec1Card'

const DashBoardSec1 = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="">
            <div className="row">
                <DashBoardSec1Card Title={"Product"} Count={"Total Product : 3"} Visit={"Product List"} Path={"/AdminProductList"}/>
                <DashBoardSec1Card Title={"Orders"} Count={"Total Orders : 3"} Visit={"Order List"} Path={"/AdminOrderList"}/>
                <DashBoardSec1Card Title={"Collection"} Count={"Total Collection : 3"} Visit={"Collection View"} Path={"/AdminProductList"}/> 
                <DashBoardSec1Card Title={"Users"} Count={"Total Users : 3"} Visit={"User List"} Path={"/AdminUserList"}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default DashBoardSec1