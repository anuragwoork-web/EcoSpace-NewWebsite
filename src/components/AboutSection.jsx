import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-[#fafafa] overflow-hidden">
        {/* Premium Ambient Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-[#1F5555] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-[400px] bg-[#FFB600] opacity-[0.03] blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content - About Company */}
          <div className="pr-0 lg:pr-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-[#FFB600] rounded-full"></div>
              <h4 className="text-[#1F5555] font-black tracking-[0.3em] text-sm md:text-sm uppercase">About Us</h4>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-8 text-[#111111]">
              Engineering the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F5555] to-[#40b0b0]">Future of Infra.</span>
            </h2>

            <p className="text-[#555] text-lg md:text-xl leading-relaxed font-medium mb-10 border-l-4 border-[#FFB600] pl-6 py-2">
              EcoSpace Infrastructures Pvt. Ltd. (EIPL) aims for quality engineering planning, design & project management consultancy services. 
            </p>
            <p className="text-[#666] text-base md:text-lg leading-loose">
              Our presence in the infra-world spans over a decade, led by a team of Subject Matter Experts (SMEs) with years of comprehensive project execution experience. We have worked across multiple organizations in various capacities to consistently exceed client expectations.
            </p>
          </div>

          {/* Cards Container - Right Side (Offset Grid Design) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative mt-10 lg:mt-0">
             {/* Decorative faint dot pattern behind cards */}
             <div className="absolute -inset-4 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60 z-0"></div>

            {/* Vision Card */}
            <div className="relative z-10 bg-white p-10 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-white/80 hover:shadow-[0_20px_60px_rgba(31,85,85,0.08)] transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center mb-8 border border-zinc-100 group-hover:bg-[#1F5555] group-hover:scale-110 transition-all duration-500">
                 <i className="ri-eye-2-line text-3xl text-[#1F5555] group-hover:text-white transition-colors duration-500"></i>
              </div>
              <h3 className="text-2xl font-black text-[#111] mb-4 group-hover:text-[#1F5555] transition-colors">Our Vision</h3>
              <p className="text-[#666] text-sm leading-loose font-medium">
                To become India's leading and trusted Engineering & Project Management consultant, partnering with clients to develop high quality infrastructure development within time and budget.
              </p>
            </div>

            {/* Mission Card (Offset vertically on desktop for staggered dynamic layout) */}
            <div className="relative z-10 bg-white p-10 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-white/80 hover:shadow-[0_20px_60px_rgba(31,85,85,0.08)] transition-all duration-500 transform hover:-translate-y-2 sm:translate-y-12 group">
               <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center mb-8 border border-zinc-100 group-hover:bg-[#FFB600] group-hover:scale-110 transition-all duration-500">
                 <i className="ri-rocket-2-line text-3xl text-[#FFB600] group-hover:text-white transition-colors duration-500"></i>
              </div>
              <h3 className="text-2xl font-black text-[#111] mb-4 group-hover:text-[#FFB600] transition-colors">Our Mission</h3>
              <p className="text-[#666] text-sm leading-loose font-medium">
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
