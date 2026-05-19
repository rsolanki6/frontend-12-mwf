import React,{useState,useEffect} from 'react'
import { FaTrash } from 'react-icons/fa'
import axios from 'axios'
import AdminSideBar from './AdminSideBar'
import AdminHeaderApp from './AdminHeaderApp'
import AdminDashboard from './AdminDashboard'
import CountContactApp from './CountContactApp'
export default function AdminContactApp() {


  // destructuring of of data
  const[contact,setData] = useState();
  // data is a variable
  // setdata is a function to update current value
  // fetch data using axios

  useEffect(()=>{
    axios.get(`http://localhost:8000/contacts`).then((response)=>{
      setData(response.data)
    },[contact])
  })


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

              <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6">
                <div className="p-5 border-b">
                      <h3 className="text-xl font-bold">Manage All Contacts  
                        <button className='bg-teal-500 text-white p-3 rounded-full ms-20 text-xl'>Total Contacts 
                          <span className='p-1 rounded-full ms-5 text-3xl flex inline-flex'><CountContactApp /></span></button></h3>

                </div>
                <div className="overflow-x-auto">
                      <table className="w-full text-left">
                          <thead className="bg-gray-50">
                                <tr>
                                <th className="p-4">Name</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Subject</th>
                                <th className="p-4">Message</th>
                                <th className="p-4">Actions</th>
                                </tr>
                          </thead>

                          <tbody>
                                {contact && contact.map((items)=>{
                                  return(
                                    <>
                                    
                                      <tr className='hover:bg-gray-50 transition'>
                                        <td className="p-4">{items.name}</td>
                                        <td className="p-4">{items.email}</td>
                                        <td className="p-4">{items.subject}</td>
                                        <td className="p-4">{items.message}</td>
                                        <td className="p-4">
                                          <button className=" p-2 text-red-500 hover:text-red-700">
                                            <FaTrash />
                                          </button>
                                        </td>
                                      </tr>

                                    </>
                                  )
                                })}
                          </tbody>
                      </table>
                </div>
              </div>
              
          </div>
         </div>

    
    </>
  )
}
