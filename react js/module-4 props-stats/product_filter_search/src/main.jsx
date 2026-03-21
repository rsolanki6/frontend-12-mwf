import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductGrid from './ProductGrid'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductGrid />
  </StrictMode>,
)
