import React from 'react'
import AdminSideBar from './admin/AdminSideBar'
import AdminHeaderApp from './admin/AdminHeaderApp'
import AdminDashboard from './admin/AdminDashboard'

export default function AdminLayout() {
  return (
    <>
     <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
               <AdminSideBar />
          
          {/* Overlay */}
               <div id="overlay" className="fixed inset-0 bg-black/50 hidden z-40 lg:hidden"></div>
          
          {/* Main */}
               <div className="flex-1 flex flex-col overflow-y-auto">
          
          {/* Navbar */}
               <AdminHeaderApp />
          
          {/* Dashboard Content */}
               <AdminDashboard />
          
          </div>
     </div>

    
    </>
  )
}