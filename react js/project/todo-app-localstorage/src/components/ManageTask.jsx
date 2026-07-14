import React, {useState, useEffect} from "react";
import HeaderApp from "./HeaderApp";
import loader from "../loader.gif";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ManageTask() {

// create a form handeling method for manage all task in local storage
useEffect(() => {
     const tasks = JSON.parse(localStorage.getItem(`tasks`)) || [];
     console.log("Task from local storage:", tasks);
},[])

// set loader for 1.5 seconds
const [loading, setLoading] = useState(true);

useEffect(() => {
     const timer = setTimeout(() => {
          setLoading(false);
     },1500)

     return () => clearTimeout(timer);
},[])

if(loading) {
     return (
          <div className="flex items-center justify-center h-screen"> 
               <img src={loader} alt="Loading..." />
          </div>
     )
}
else {

     return (
     <>
          <HeaderApp taskCount={JSON.parse(localStorage.getItem('tasks'))?.length || 0} />

          <main className="min-h-screen bg-slate-100 py-6 md:py-10 px-3 md:px-4">
          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6">

               <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    Manage Tasks
               </h2>

               {/* Desktop Table */}
               <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border-collapse">
                         <thead>
                              <tr className="bg-slate-900 text-white">
                                   <th className="p-4 text-left">Task</th>
                                   <th className="p-4 text-left">Description</th>
                                   <th className="p-4 text-left">Priority</th>
                                   <th className="p-4 text-left">Date</th>
                                   <th className="p-4 text-center">Actions</th>
                              </tr>
                         </thead>

                         <tbody>
                              {JSON.parse(localStorage.getItem("tasks"))?.map((task) => (
                              <tr key={task.id} className="border-b hover:bg-slate-50 transition">
                                   <td className="p-4 break-words">{task.title}</td>
                                   <td className="p-4 break-words">{task.description}</td>
                                   <td className="p-4">{task.priority}</td>
                                   <td className="p-4">{task.date}</td>
                                   <td className="p-4">
                                   <div className="flex gap-3 justify-center">
                                        <button className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                                        <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                                   </div>
                                   </td>
                              </tr>
                              ))}
                         </tbody>
                    </table>
               </div>

               {/* Mobile Cards */}
               <div className="md:hidden space-y-4">
                    {JSON.parse(localStorage.getItem("tasks"))?.map((task) => (
                    <div key={task.id} className="bg-slate-50 border rounded-xl p-4 shadow-sm">
                         <h3 className="font-semibold text-lg text-slate-900">{task.title}</h3>

                         <p className="text-slate-600 mt-2 break-words">{task.description}</p>

                         <div className="mt-3 space-y-1 text-sm">
                              <p><span className="font-medium">Priority:</span>{" "}{task.priority}</p>
                              <p><span className="font-medium">Date:</span> {task.date}</p>
                         </div>

                         <div className="flex gap-4 mt-4">
                              <button className="flex items-center gap-2 text-blue-500"><FaEdit />Edit</button>
                              <button className="flex items-center gap-2 text-red-500"><FaTrash />Delete</button>
                         </div>
                    </div>
                    ))}
               </div>

          </div>
          </main>
     </>
     );

     }

}