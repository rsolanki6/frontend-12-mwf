import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import ManageTask from './components/ManageTask.jsx'
import DeleteTask from './components/DeleteTask.jsx'
import UpdateTask from './components/UpdateTask.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />} />
        <Route path="/manage-task" element={<ManageTask />} />
        <Route path="/delete-task/:id" element={<DeleteTask />} />
        <Route path="/update-task/:id" element={<UpdateTask />} />
      </Routes>
    </Router>
  </StrictMode>,
)