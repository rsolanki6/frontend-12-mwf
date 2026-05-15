import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
// User Side
import Layout from './Layout'
import FeedbackApp from './component/Pages/FeedbackApp'
import ContantUsApp from './component/Pages/ContantUsApp'
import ProductDetailApp from './component/Pages/ProductDetailApp'
import LoginApp from './component/Pages/LoginApp'
import CartApp from './component/Pages/CartApp'
// Admin Side
// import AdminLogin from './admin/AdminLogin'
import AdminLayout from './AdminLayout'
import AdminManageReviews from './admin/AdminManageReviews'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path='/' element={<Layout />} />
        <Route path="/feedback" element={<FeedbackApp />} />
        <Route path="/contact" element={<ContantUsApp />} />
        <Route path="/shop" element={<ProductDetailApp />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/cart" element={<CartApp />} />

        {/* Admin Routes */}
        <Route path='/admin' element={<AdminLayout />} />
        <Route path='/admin/reviews' element={<AdminManageReviews />} />
      </Routes>
    </Router>
  </StrictMode>,
)