import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTask() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [task, setTask] = useState({
    taskname: "",
    priority: "",
    addeddate: "",
    details: "",
  });

  // Fetch task by ID
  useEffect(() => {
    axios
      .get(`http://localhost:8000/addtask/${id}`)
      .then((res) => {
        setTask(res.data);
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Unable to fetch task data.",
          icon: "error",
        });

        navigate("/manage-task");
      });
  }, [id, navigate]);

  // Handle Input Change
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  // Update Task
  const updateTaskData = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/addtask/${id}`, task)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Task updated successfully.",
          icon: "success",
          confirmButtonColor: "#14b8a6",
        }).then(() => {
          navigate("/manage-task");
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to update task.",
          icon: "error",
        });
      });
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Left Side */}
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600 p-8">
          <img
            src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif"
            alt="Update Task"
            className="w-full max-w-md rounded-2xl"
          />
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Update Task
          </h1>

          <p className="text-gray-500 mb-8">
            Edit your task details below.
          </p>

          <form onSubmit={updateTaskData} className="space-y-6">

            {/* Task Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Task Name
              </label>

              <input
                type="text"
                name="taskname"
                value={task.taskname}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
                placeholder="Enter task name"
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
                value={task.priority}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
                required
              >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Added Date
              </label>

              <input
                type="date"
                name="addeddate"
                value={task.addeddate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
                required
              />
            </div>

            {/* Details */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Task Details
              </label>

              <textarea
                name="details"
                rows="4"
                value={task.details}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500 resize-none"
                placeholder="Write task details..."
                required
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <button
                type="submit"
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-xl transition duration-300"
              >
                Update Task
              </button>

              <button
                type="button"
                onClick={() => navigate("/manage-task")}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 rounded-xl transition duration-300"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}