import React from 'react';

const CTA = () => {
    return (
        <div className="w-full bg-[#FFB600] py-2 sm:py-3 px-3 sm:px-12 flex flex-row items-center justify-center gap-3 md:gap-16">
            <h2 className="text-black text-[3.5vw] sm:text-lg md:text-xl font-bold text-left leading-tight max-w-[65%] sm:max-w-none">
                Looking for a Design & Project Management Consultation?
            </h2>
            <button className="bg-[#002B5B] hover:bg-[#001F3F] text-white px-3 py-1.5 sm:px-6 sm:py-2 rounded-sm font-bold text-[3vw] sm:text-base transition-all duration-300 shadow-md whitespace-nowrap flex items-center gap-1 sm:gap-2">
                Get Free Quote
                <span className="text-[3.5vw] sm:text-lg font-bold">»</span>
            </button>
        </div>
    );
};

export default CTA;
