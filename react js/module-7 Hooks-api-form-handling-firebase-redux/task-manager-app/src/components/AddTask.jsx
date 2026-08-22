import React, { useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddTask() {

  const taskname = useRef("");
  const priority = useRef("");
  const addeddate = useRef("");
  const details = useRef("");

  const navigate = useNavigate();

  // Form Handling
  const addTaskData = (e) => {

    e.preventDefault();

    var insertTaskData = {

      taskname: taskname.current.value,
      priority: priority.current.value,
      addeddate: addeddate.current.value,
      details: details.current.value,

    };

    // API Call
    axios
      .get("http://brijeshguru.com/api/add_product.php", { params: insertTaskData })

      .then(() => {

        Swal.fire({
          title: "Wow!",
          text: "Your task successfully added!",
          icon: "success",
        });

        e.target.reset();

        navigate("/");

      })

  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden">

        {/* Left Side GIF */}
        <div className="hidden lg:flex items-center justify-center bg-teal-500 p-8">

          <img src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif"
            alt="Task Manager"
            className="w-full max-w-md rounded-2xl"/>

        </div>

        {/* Right Side Form */}
        <div className="p-8 md:p-12">

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Add New Task
          </h1>

          <p className="text-gray-500 mb-8">
            Manage your daily work easily
          </p>

          <form onSubmit={addTaskData} className="space-y-6">

            {/* Task Name */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Task Name
              </label>

              <input
                type="text"
                name="taskname"
                ref={taskname}
                placeholder="Enter task name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
                required
              />

            </div>

            {/* Priority */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Priority
              </label>

              <select
                name="priority"
                ref={priority}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
                required
              >

                <option value="">Select Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>

              </select>

            </div>

            {/* Added Date */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Added Date
              </label>

              <input
                type="date"
                name="addeddate"
                ref={addeddate}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
                required
              />

            </div>

            {/* Task Details */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Task Details
              </label>

              <textarea
                name="details"
                ref={details}
                rows="4"
                placeholder="Write task details..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500 resize-none"
                required
              ></textarea>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Add Task
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}