import './App.css'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Views/Pages/Client/Home/Home'
import Shop from './Views/Pages/Client/Shop/Shop'
import About from './Views/Pages/Client/About/About'
import Contact from './Views/Pages/Client/Contact/Contact'
import AdminLogin from './Views/Pages/Admin/Auth/AdminLogin'
import AdminDashBoard from './Views/Pages/Admin/AdminDashBoard/AdminDashBoard'
import ProductList from './Views/Pages/Admin/AdminProducts/ProductList'
import CategoryList from './Views/Pages/Admin/AdminCategory/CategoryList'
import OrderList from './Views/Pages/Admin/AdminOrder/OrderList'
import UserList from './Views/Pages/Admin/AdminUser/UserList'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/AdminDashBoard' element={<AdminDashBoard />} />
          <Route path='/AdminProductList' element={<ProductList />} />
          <Route path='/AdminCategoryList' element={<CategoryList />} />
          <Route path='/AdminOrderList' element={<OrderList />} />
          <Route path='/AdminUserList' element={<UserList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
