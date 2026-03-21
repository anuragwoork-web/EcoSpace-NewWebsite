import React from "react";

const Card = ({ icon, head, para }) => {
  return (
    <div className="group relative w-full h-full bg-[#FAFAFA] rounded-2xl p-8 lg:p-12 border border-black/5 hover:bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(31,85,85,0.08)] overflow-hidden flex flex-col justify-between hover:-translate-y-2">
      
      {/* Decorative Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1F5555] to-[#FFB600] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-20 h-20 rounded-[1.2rem] bg-white shadow-sm border border-zinc-100 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-md">
          <img className="h-10 w-auto opacity-70 group-hover:opacity-100 group-hover:invert transition-all duration-500" src={icon} alt={head} />
        </div>
        
        <h3 className="capitalize font-extrabold text-[1.4rem] lg:text-[1.7rem] tracking-tight text-[#111111] leading-[1.2] mb-5 group-hover:text-[#1F5555] transition-colors duration-300">
            {head}
        </h3>
        <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-10 group-hover:text-[#333] transition-colors">
            {para}
        </p>
      </div>
        
      <button className="relative z-10 self-start flex items-center gap-3 text-[#111] font-bold text-sm tracking-wider uppercase group/btn transition-all duration-300">
        <span className="group-hover/btn:text-[#FFB600] transition-colors">Explore</span> 
        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover/btn:bg-[#FFB600] group-hover/btn:text-white transition-all duration-300">
            <i className="ri-arrow-right-line text-lg"></i>
        </div>
      </button>
      
      {/* Absolute faint background master ghost icon */}
      <img 
        src={icon} 
        className="absolute -bottom-10 -right-10 w-64 h-64 opacity-0 grayscale pointer-events-none group-hover:opacity-[0.03] group-hover:scale-125 transition-all duration-700 ease-out z-0" 
        alt="" 
      />
    </div>
  );
};

export default Card;
