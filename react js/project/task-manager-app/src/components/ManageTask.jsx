import React, { useState,useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import HeaderApp from "./HeaderApp";
import axios from "axios";

export default function ManageTask() {

  // destructuring of data
  const[task, setTask]= useState([]);
  useEffect(()=>{
      axios.get(`http://localhost:8000/addtask`).then((response)=>{
          setTask(response.data)
      })
  },[task]) 

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <HeaderApp />

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-teal-500 text-white p-5">
          <h1 className="text-2xl font-bold">
            Manage Tasks
          </h1>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto p-2">

          <table className="w-full">

            <thead className="bg-gray-200 uppercase">

              <tr>
                <th className="p-4 text-center">#</th>
                <th className="p-4 text-center">Task Name</th>
                <th className="p-4 text-center">Priority</th>
                <th className="p-4 text-center">Date</th>
                <th className="p-4 text-center">Details</th>
                <th className="p-4 text-center">Actions</th>
              </tr>

            </thead>

            <tbody>

              {task && task.map((items,index)=>{
                return(
                  <>
                  
                    <tr className="hover:bg-indigo-50 transition duration-300 text-center">
                    <td className="px-6 py-4 font-semibold">{index+1}</td>
                    <td className="px-6 py-4">{items.taskname}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold
                        ${
                          items.priority === "High"
                          ? "bg-red-100 text-red-600"

                          : items.priority === "Medium"
                          ? "bg-green-100 text-green-600"

                          : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {items.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">{items.addeddate}</td>
                    <td className="px-6 py-4">
                      {items.details}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        {/* Edit Button */}
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition duration-300 shadow-md">
                          <FaEdit />
                        </button>
                        {/* Delete Button */}
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition duration-300 shadow-md">
                          <FaTrash />
                        </button>
                      </div>
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
  );
}