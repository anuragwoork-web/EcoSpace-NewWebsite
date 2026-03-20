import React from "react";

const Card = ({ icon, head, para }) => {
  return (
    <div className="m-4 px-9 shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-10 pb-16 max-w-[33rem] group transform transition duration-500 hover:-translate-y-3 cursor-pointer bg-white rounded-xl border-b-4 border-transparent hover:border-[#1F5555]">
      <div className="bg-[#FFF9E6] w-20 h-20 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#1F5555] transition-colors duration-500">
        <img className="h-12 w-auto group-hover:invert transition-all duration-500" src={icon} alt="Card Icon" />
      </div>
      
      <div className="mt-2">
        <h3 className="capitalize font-bold text-xl lg:text-2xl text-[#111111] leading-tight mb-4 group-hover:text-[#1F5555] transition-colors">{head}</h3>
        <p className="text-[#555555] text-[0.95rem] leading-relaxed mb-8 opacity-90">{para}</p>
        
        <button className="flex items-center gap-2 text-[#1F5555] font-bold text-sm lg:text-base group/btn hover:gap-3 transition-all duration-300">
          Know More 
          <span className="text-xl transition-transform duration-300">→</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
