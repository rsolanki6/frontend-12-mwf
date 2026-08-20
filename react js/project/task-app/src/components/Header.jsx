import React from "react";
import { Home, CircleHelp, Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="h-[75px] bg-white flex items-center justify-between px-[60px]">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgt2ZGyLPdvd-1UhLeD13_hvvsCe-ST33nGZzDg3V2g&s=10"
           alt="Photo" className="h-[58px] w-auto object-contain"/>
        </div>

        {/* User */}
        <div className="flex items-center gap-2">
          <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="Brijesh Pandey" className="w-[36px] h-[36px] rounded-full object-cover"/>
          <span className="text-[13px] text-[#6682a0]">User</span>
        
            <button className="flex items-center gap-1.5 px-[20px] h-[36px] bg-[#e74c3c] text-white text-[13px] rounded-[4px] hover:bg-[#c0392b]">
              Logout
            </button>
        
        </div>
      </div>
      {/* Navigation */}
      <nav className="h-[51px] bg-[#414b57] flex items-stretch pl-[60px]">
        <Link to="/dashboard" className="flex items-center gap-1.5 px-[20px] text-[13px] text-[#c5c9ce] hover:bg-[#505b68]">
          <Home size={15} />
          Dashboard
        </Link>

        <Link to="/my-request" className="flex items-center px-[20px] bg-[#53606e] text-[13px] text-white">
          My Request
        </Link>

        <Link to="#" className="flex items-center px-[20px] text-[13px] text-[#c5c9ce] hover:bg-[#505b68]">
          Report
        </Link>

        <Link to="#" className="flex items-center gap-1.5 px-[20px] text-[13px] text-[#c5c9ce] hover:bg-[#505b68]">
          <CircleHelp size={15} />
          Help
        </Link>
      </nav>
    </header>
  );
}