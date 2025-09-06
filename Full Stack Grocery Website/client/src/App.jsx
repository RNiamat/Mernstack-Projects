import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import MyOrders from './pages/MyOrders'
import { AppContext } from './context/AppContext'
import { useContext } from 'react'
import Auth from './models/Auth'

const App = () => {
  const { isSeller, showUserLogin } = useContext(AppContext);  // ✅ Correct
  const isSellerPath = useLocation().pathname.includes('seller'); // ✅ Fixed

  return (
    <div className='text-default min-h-screen'>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Auth /> : null}
      <div className='px-6 md:px-16 lg:px-24 xl:px-32 '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
