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

          <main className="min-h-screen bg-slate-100 py-10 px-4">

               <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6">

                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                         Manage Tasks
                    </h2>

                    <div className="overflow-x-auto">

                         <table className="w-full table-fixed border-collapse">
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
                                   {JSON.parse(localStorage.getItem('tasks'))?.map((task) => (
                                   <tr key={task.id} className="border-b hover:bg-slate-50">
                                        <td className="p-4 w-[200px] break-words">{task.title}</td>
                                        <td className="p-4 w-[300px] break-words">{task.description}</td>
                                        <td className="p-4">{task.priority}</td>
                                        <td className="p-4">{task.date}</td>
                                        <td className="p-4">
                                        <div className="flex gap-3 justify-center">
                                             <button className="text-blue-500"><FaEdit /></button>
                                             <button className="text-red-500"><FaTrash /></button>
                                        </div>
                                        </td>
                                   </tr>
                                   ))}
                              </tbody>

                         </table>

                    </div>

               </div>

          </main>
     </>
     );

     }

}