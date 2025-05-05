import React from 'react'
import Layout from '../Layout'
import DashBoardSec1 from './DashBoardSec1'

const AdminDashBoard = () => {
  return (
    <>
      <Layout>
        <div className="container-fluid bg-light" style={{height:"89vh"}}>
          <DashBoardSec1 />
        </div>
      </Layout>
    </>
  )
}

export default AdminDashBoard
