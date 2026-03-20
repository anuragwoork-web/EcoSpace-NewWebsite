import React from 'react';

const AboutSection = () => {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Content - About Company */}
          <div className="lg:col-span-5 pr-0 lg:pr-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-10 bg-[#FFB600]"></div>
              <h4 className="text-[#1F5555] font-bold tracking-[0.2em] text-sm md:text-base uppercase">About Us</h4>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.2rem] leading-tight mb-3 tracking-tight">
              <div className="flex items-center font-extrabold">
                <span className="text-zinc-900">Eco</span>
                <span className="text-[#1F5555]">Space</span>
              </div>
              <div className="text-zinc-900 font-bold">Infrastructures Pvt. Ltd.</div>
            </h2>

            <p className="text-[#444444] text-[1rem] md:text-[1.1rem] leading-relaxed font-medium">
              EIPL aims for quality engineering planning, design & project management consultancy services. Our presence in infra-world is since more than decade led by the team of Subject Matter Experts(SMEs) with years of comprehensive project execution experience, worked in multiple organization in various capacities, to meet the Client's expectation
            </p>
          </div>

          {/* Cards Container */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8">

            {/* Vision Card */}
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border-t-4 border-[#1F5555] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <h3 className="text-2xl font-bold text-[#1F5555] mb-6 group-hover:text-[#FFB600] transition-colors">Vision</h3>
              <p className="text-[#555555] text-[0.95rem] md:text-[1.05rem] leading-loose font-medium">
                To become India's leading and trusted Engineering & Project Management consultant, partnering with clients to develop high quality infrastructure development within time and budget.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border-t-4 border-[#1F5555] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <h3 className="text-2xl font-bold text-[#1F5555] mb-6 group-hover:text-[#FFB600] transition-colors">Mission</h3>
              <p className="text-[#555555] text-[0.95rem] md:text-[1.05rem] leading-loose font-medium">
                To provide value creation for Infrastructure development through our Engineering, Project Management and Techno-Contractual services.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
