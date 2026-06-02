import React, {useState} from "react";
import { MdDescription } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

export default function AddTask() {

     // create a destructuring state for add task via form
     const [taskTitle, setTaskTitle] = useState("");
     const [taskdescription, setTaskDescription] = useState("");
     const [taskDate, setTaskDate] = useState("");
     const [taskPriority, setTaskPriority] = useState("Low");


     // create a function of form handeling to add all data in locla storage
     const handleAddTask = (e) =>{
          e.preventDefault();
          const newTask = {
               id: Date.now(),
               title: taskTitle,
               description: taskdescription,
               date: taskDate,
               priority: taskPriority
          };

          // add new task to local storage
          const existingTask = JSON.parse(localStorage.getItem(`tasks`)) || [];
          existingTask.push(newTask);

          localStorage.setItem(`tasks`, JSON.stringify(existingTask));
          // show success message
          toast.success('Task added successfully!');

          // clear the form
          setTaskTitle("");
          setTaskDescription("");
          setTaskDate("");
          setTaskPriority("");
     }


  return (
    <main className="min-h-screen bg-white flex items-center justify-center -mt-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center">


       {/* GIF Section */}
        <div className="hidden md:flex justify-center items-center">
          <div className="bg-white rounded-3xl shadow-2xl p-5 w-full max-w-lg">

            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3N0MTR0N3BxZ2N5OGx2Z2I1aTh0bTRvbnJvM2RrN2Z6M3NkbHF6YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlBO7eyXzSZkJri/giphy.gif"
              alt="Task Management"
              className="w-full rounded-2xl"
            />

            <h3 className="text-2xl font-bold text-slate-900 mt-6 text-center">
              Stay Organized
            </h3>

            <p className="text-slate-500 text-center mt-2">
              Plan tasks, track progress, and achieve your goals efficiently.
            </p>

          </div>
        </div>


        {/* Form Section */}
        <div className="bg-white rounded-3xl text-black shadow-2xl p-8">
          <ToastContainer />  
          <h2 className="text-4xl font-bold text-black">Add New Task</h2>

          <p className="text-slate-500 mb-8">Organize your work and stay productive.</p>

          <form className="space-y-3" onSubmit={handleAddTask}>

               {/* Task Title */}
               <div>
               <label className="block font-semibold mb-2">Task Title</label>

               <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
                    placeholder="Enter task title"
                    className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-900"
               />
               </div>


               {/* Task Description */}
               <div>
               <label className="block font-semibold mb-2">Description</label>

               <textarea rows="5" value={taskdescription} onChange={(e) => setTaskDescription(e.target.value)}
                    placeholder="Task description..."
                    className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"></textarea>
               </div>


               {/* Due Date and Priority */}
               <div className="grid md:grid-cols-2 gap-5">
                    
                    {/* Due Date */}
                    <div>
                         <label className="block font-semibold mb-2">Due Date</label>

                         <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)}
                         className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-900"/>
                    </div>


                    {/* Priority */}
                    <div>
                         <label className="block font-semibold mb-2">Priority</label>

                         <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}
                         className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-900">
                         <option value="Low">Low</option>
                         <option value="Medium">Medium</option>
                         <option value="High">High</option>
                         </select>
                    </div>

               </div>

               <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold text-lg transition duration-300">
                    Add Task
               </button>

          </form>
        </div>

 

      </div>
    </main>
  );
}