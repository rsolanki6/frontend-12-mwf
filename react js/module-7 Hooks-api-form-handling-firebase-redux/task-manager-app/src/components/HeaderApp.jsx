import React, { useState } from "react";
import {
  FaTasks,
  FaBars,
  FaTimes,
  FaPlus,
  FaEdit,
  FaList,
} from "react-icons/fa";
import CountTask from "./CountTask";
import { Link } from "react-router-dom";

export default function HeaderApp() {

  const [showMenu, setShowMenu] = useState(false);

  const totalTasks = 25;

  return (
    <>
      <header className="w-full bg-slate-900 text-white shadow-lg fixed top-0 left-0 z-50">

        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="bg-teal-500 p-2 rounded-lg">
                <FaTasks className="text-white text-lg" />
              </div>

              <Link to="/" className="flex items-center gap-2 hover:text-teal-400 transition">
                <h1 className="text-xl font-bold">
                  TaskFlow
                </h1>
              </Link>                

            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6">

              <Link to="/" className="flex items-center gap-2 hover:text-teal-400 transition">
                <FaPlus />
                Add Task
              </Link>

              <Link to="/manage-task" className="flex items-center gap-2 hover:text-teal-400 transition">
                <FaList />
                Manage Task
              </Link>

              <Link to="/edit-task" className="flex items-center gap-2 hover:text-teal-400 transition">
                <FaEdit />
                Update Task
              </Link>

             <div className="bg-teal-500 px-4 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-1">
                <span>Total :</span>
                <CountTask />
              </div>

            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (

          <div className="md:hidden bg-slate-800 p-5 space-y-4">

            <Link
              to="/addtask"
              className="flex items-center gap-3 hover:text-teal-400"
            >
              <FaPlus />
              Add Task
            </Link>

            <Link
              to="/managetask"
              className="flex items-center gap-3 hover:text-teal-400"
            >
              <FaList />
              Manage Task
            </Link>

            <div className="bg-teal-500 px-4 py-2 rounded-xl text-center font-semibold">
              Total Tasks : <CountTask />
            </div>

          </div>
        )}

      </header>

      {/* Header Space */}
      <div className="h-16"></div>
    </>
  );
}