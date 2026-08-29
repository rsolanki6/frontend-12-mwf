import React from "react";
import Avatar from "../assets/avatar.png";

export default function Home() {
  return (
<section id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
     {/* Grid Background */}
     <div className="absolute inset-0 opacity-10"
     style={{
     backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
          linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
     backgroundSize: "50px 50px",
     }}></div>

     {/* Glow Effect */}
     <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

     <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center items-center min-h-screen">
          
          {/* Name */}
          <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-1 text-center">Hi, I'm</h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center">Rohan Solanki</h1>

          <p className="mt-2 text-center text-gray-300 text-lg md:text-2xl">AI-Enabled Frontend Developer</p>

          <p className="text-center text-gray-400 mt-2 max-w-2xl">React • JavaScript • Tailwind CSS • Firebase</p>

          {/* Hero Content */}
          <div className="relative flex justify-center items-center mt-10">
          
               {/* Left Text */}
               <h1 className="hidden lg:block absolute right-[100%] text-[8rem] xl:text-[10rem] font-extrabold text-white/35 select-none">
                    PORT
               </h1>

               {/* Avatar */}
               <div className="animate-bounce">
                    <img src={Avatar} alt="Developer Avatar" className="w-40 md:w-30 lg:w-45 mt-5"/>
               </div>

               {/* Right Text */}
               <h1 className="hidden lg:block absolute left-[100%] text-[8rem] xl:text-[10rem] font-extrabold text-white/35 select-none">
                    FOLIO
               </h1>
          </div>

          {/* Mobile Portfolio Text */}
          <h1 className="lg:hidden mt-2 text-5xl md:text-7xl font-extrabold text-white/10">PORTFOLIO</h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
               <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
                    View Projects
               </a>

               <a href="#contact" className="border-2 border-white hover:border-blue-500 hover:text-blue-400 px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
                    Contact Me
               </a>
          </div>
     
     </div>
</section>

  );
}