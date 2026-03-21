import React from "react";
import dotBack from '../../assets/formBack.png'

const FormPage = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">

      {/* Decorative Premium Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-gradient-to-b from-[#1F5555]/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[600px] bg-gradient-to-t from-[#FFB600]/5 to-transparent blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">

        {/* User Requested #FAFAFA Colored Card */}
        <div className="bg-[#FAFAFA] rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col xl:flex-row gap-12 lg:gap-20 border border-zinc-100">

          {/* Subtle watermark */}
          <i className="ri-double-quotes-l absolute -top-10 -left-10 text-[20rem] text-white opacity-40 pointer-events-none z-0"></i>

          {/* Left Text Content */}
          <div className="xl:w-[45%] relative z-10 flex flex-col justify-center mt-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-[#FFB600] rounded-full"></div>
              <h4 className="text-[#1F5555] font-black tracking-[0.4em] text-sm uppercase">Quick Connect</h4>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tighter text-[#111111] leading-[1.05] mb-8">
              Let's talk about <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F5555] to-[#40b0b0]">improving.</span>
            </h2>

            <div className="relative">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-[#FFB600] rounded-r-full"></div>
              <p className="text-[#555] text-base md:text-lg leading-relaxed font-medium pl-6 py-1">
                "When we build, we create not just a structure but also a relationship with the community in which it stands. The success of our efforts depends on how well we understand both the needs of the community and the constraints imposed by the site. We must be sensitive to both these factors at every stage of design and construction."
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6 bg-white w-fit px-6 py-4 rounded-2xl border border-black/[0.03] shadow-sm">
              <div className="w-12 h-12 bg-[#FAFAFA] shadow-sm rounded-full flex items-center justify-center border border-zinc-100">
                <i className="ri-phone-fill text-xl text-[#1F5555]"></i>
              </div>
              <div>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-0.5">Direct Line</p>
                <p className="text-xl font-black text-[#111] tracking-tight">+91 99992 83368</p>
              </div>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="xl:w-[55%] relative z-10 w-full mt-4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">

              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label className="text-zinc-500 font-bold text-xs uppercase tracking-widest ml-1">Name *</label>
                <div className="relative group">
                  <i className="ri-user-3-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-zinc-400 group-focus-within:text-[#1F5555] transition-colors"></i>
                  <input
                    className="w-full bg-white border border-zinc-200 focus:border-[#1F5555] text-[#111] py-4 pl-12 pr-4 outline-none transition-all duration-300 rounded-xl focus:shadow-[0_4px_20px_rgba(31,85,85,0.06)] placeholder:text-zinc-400 font-bold text-sm"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="text-zinc-500 font-bold text-xs uppercase tracking-widest ml-1">Email *</label>
                <div className="relative group">
                  <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-zinc-400 group-focus-within:text-[#1F5555] transition-colors"></i>
                  <input
                    className="w-full bg-white border border-zinc-200 focus:border-[#1F5555] text-[#111] py-4 pl-12 pr-4 outline-none transition-all duration-300 rounded-xl focus:shadow-[0_4px_20px_rgba(31,85,85,0.06)] placeholder:text-zinc-400 font-bold text-sm"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="flex flex-col gap-2">
                <label className="text-zinc-500 font-bold text-xs uppercase tracking-widest ml-1">Phone *</label>
                <div className="relative group">
                  <i className="ri-phone-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-zinc-400 group-focus-within:text-[#1F5555] transition-colors"></i>
                  <input
                    className="w-full bg-white border border-zinc-200 focus:border-[#1F5555] text-[#111] py-4 pl-12 pr-4 outline-none transition-all duration-300 rounded-xl focus:shadow-[0_4px_20px_rgba(31,85,85,0.06)] placeholder:text-zinc-400 font-bold text-sm"
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>

              {/* Company Input */}
              <div className="flex flex-col gap-2">
                <label className="text-zinc-500 font-bold text-xs uppercase tracking-widest ml-1">Company Name *</label>
                <div className="relative group">
                  <i className="ri-building-4-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-zinc-400 group-focus-within:text-[#1F5555] transition-colors"></i>
                  <input
                    className="w-full bg-white border border-zinc-200 focus:border-[#1F5555] text-[#111] py-4 pl-12 pr-4 outline-none transition-all duration-300 rounded-xl focus:shadow-[0_4px_20px_rgba(31,85,85,0.06)] placeholder:text-zinc-400 font-bold text-sm"
                    type="text"
                    placeholder="Company Name"
                    required
                  />
                </div>
              </div>

              {/* Message Input - Full Width */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-zinc-500 font-bold text-xs uppercase tracking-widest ml-1">Comment or Message *</label>
                <div className="relative group">
                  <i className="ri-message-2-line absolute left-4 top-5 text-xl text-zinc-400 group-focus-within:text-[#1F5555] transition-colors"></i>
                  <textarea
                    className="w-full bg-white border border-zinc-200 focus:border-[#1F5555] text-[#111] py-4 pl-12 pr-4 outline-none transition-all duration-300 rounded-xl min-h-[120px] resize-y focus:shadow-[0_4px_20px_rgba(31,85,85,0.06)] placeholder:text-zinc-400 font-bold text-sm leading-relaxed"
                    placeholder="How can we help you..?"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Captcha & Submit - Full Width */}
              <div className="flex flex-col md:flex-row items-end gap-6 md:col-span-2 mt-2">
                <div className="flex flex-col gap-2 w-full md:w-[40%]">
                  <label className="text-zinc-500 font-bold text-xs uppercase tracking-widest ml-1">Custom Captcha *</label>
                  <div className="flex items-center gap-4 bg-white border border-zinc-200 py-3 px-5 rounded-xl focus-within:border-[#1F5555] transition-all duration-300">
                    <span className="font-extrabold text-lg text-[#1F5555] whitespace-nowrap">14 + 5</span>
                    <span className="text-zinc-300 font-bold">=</span>
                    <input
                      className="bg-transparent outline-none w-full font-bold text-lg text-[#111] text-center"
                      type="text"
                      placeholder="?"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full md:w-[60%] bg-[#111111] text-white font-bold uppercase tracking-widest py-4 px-6 rounded-xl hover:bg-[#FFB600] hover:text-[#111] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(255,182,0,0.3)] text-xs flex items-center justify-center gap-3 group">
                  Let's Connect
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#111]/10 transition-colors">
                    <i className="ri-arrow-right-line text-base"></i>
                  </div>
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FormPage;
