import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

import sec1 from "../assets/sectors/metro_rail.png";
import sec2 from "../assets/sectors/underground_metro.png";
import sec3 from "../assets/sectors/highway.png";
import sec4 from "../assets/sectors/railway.png";
import sec5 from "../assets/sectors/bridge.png";
import sec6 from "../assets/sectors/industrial.png";
import sec7 from "../assets/sectors/tunnelling.png";

const sectors = [
  {
    id: 1,
    title: "Metro & High Speed Rail",
    icon: "ri-train-wifi-line",
    desc: "Pioneering the future of urban mobility with cutting-edge elevated and high-speed rail infrastructures.",
    image: sec1,
  },
  {
    id: 2,
    title: "Underground Metro",
    icon: "ri-subway-line",
    desc: "Advanced tunneling and deep excavation engineering for seamless underground transit networks.",
    image: sec2,
  },
  {
    id: 3,
    title: "Highway Rings",
    icon: "ri-road-map-line",
    desc: "Designing robust, scalable, and intelligent highway corridors connecting major economic hubs.",
    image: sec3,
  },
  {
    id: 4,
    title: "Railway Corridors",
    icon: "ri-train-line",
    desc: "Modernizing national railway infrastructure with heavy-duty tracks and specialized bridges.",
    image: sec4,
  },
  {
    id: 5,
    title: "Bridges",
    icon: "ri-guide-line",
    desc: "Engineering structurally magnificent and resilient bridges spanning challenging terrains.",
    image: sec5,
  },
  {
    id: 6,
    title: "Industrial",
    icon: "ri-building-4-line",
    desc: "Master-planning and engineering high-capacity industrial hubs and specialized production complexes.",
    image: sec6,
  },
  {
    id: 7,
    title: "Tunnelling Works",
    icon: "ri-t-box-line",
    desc: "Executing complex tunnel boring and underground excavation projects with uncompromising safety standards.",
    image: sec7,
  },
];

const SectorsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);
  const progressBarRefs = useRef([]);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  
  const DURATION = 6000; // 6 seconds per slide

  // Setup initial animations once
  useEffect(() => {
    gsap.set(imageRefs.current, { opacity: 0, scale: 1.05 });
    gsap.set(textRefs.current, { opacity: 0, y: 30 });
    
    gsap.to(imageRefs.current[0], { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" });
    gsap.to(textRefs.current[0], { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 });
  }, []);

  const handleTabChange = useCallback((index) => {
    if (index === activeTab) return;

    // Fast, overwritten crossfade for snappy hover performance
    gsap.to(imageRefs.current[activeTab], { opacity: 0, scale: 1.05, duration: 0.6, ease: "power2.inOut", zIndex: 0, overwrite: "auto" });
    gsap.to(textRefs.current[activeTab], { opacity: 0, y: -20, duration: 0.4, ease: "power2.in", overwrite: "auto" });
    
    // Stop the active progress bar immediately
    gsap.killTweensOf(progressBarRefs.current[activeTab]);
    gsap.set(progressBarRefs.current[activeTab], { width: "0%" });

    gsap.fromTo(imageRefs.current[index], 
      { opacity: 0, scale: 1.02 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", zIndex: 10, overwrite: "auto" }
    );
    gsap.fromTo(textRefs.current[index],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.1, overwrite: "auto" }
    );

    setActiveTab(index);
  }, [activeTab]);

  // Autoplay Logic Loop
  useEffect(() => {
    // Animate the progress bar for the current active tab
    gsap.fromTo(progressBarRefs.current[activeTab],
      { width: "0%" },
      { width: "100%", duration: DURATION / 1000, ease: "linear", overwrite: "auto" }
    );

    // Set the timer to move to the next slide automatically
    timerRef.current = setTimeout(() => {
      const nextIndex = (activeTab + 1) % sectors.length;
      handleTabChange(nextIndex);
    }, DURATION);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [activeTab, handleTabChange]);


  const handleInteraction = (index) => {
    handleTabChange(index);
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-[#0a0a0a] overflow-hidden relative border-t border-b border-white/5">
      
      {/* Engineering Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40"></div>
      {/* Ambient Depth Glow */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#1F5555]/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header - Minimalist variant requested by user */}
        <div className="flex flex-col items-start mb-10 pt-4">
          <div className="w-12 h-1 bg-[#FFB600] mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tighter text-white leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F5555] to-[#40b0b0]">Sectors,</span> we Do!
          </h2>
        </div>

        {/* The Premium Dark Split Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch min-h-[450px] lg:min-h-[500px]">
          
          {/* Left Navigation - Dark Theme Tabs with Hover Tracking & Progress Bars */}
          <div className="w-full lg:w-[40%] flex flex-col justify-start relative group/nav">
            <div className="flex flex-col gap-2 relative z-10 lg:pr-6">
                {sectors.map((sector, index) => {
                  const isActive = activeTab === index;
                  return (
                    <div 
                      key={sector.id}
                      onMouseEnter={() => handleInteraction(index)}
                      className={`group relative flex items-center justify-between py-4 pr-4 pl-6 cursor-pointer rounded-2xl transition-all duration-300 overflow-hidden ${
                         isActive ? 'bg-[#151515] shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-transparent' : 'border border-transparent hover:bg-white/[0.03]'
                      }`}
                    >
                      {/* Integrated Animated Progress Bar Base Track (Only on Active) */}
                      {isActive && (
                          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
                             {/* The actual filling progress line */}
                             <div 
                               ref={el => progressBarRefs.current[index] = el}
                               className="h-full bg-gradient-to-r from-[#1F5555] to-[#40b0b0]"
                             ></div>
                          </div>
                      )}

                      <div className="flex items-center gap-4">
                        {/* 1. Visual Identity (Icon) */}
                        <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                           isActive ? 'bg-[#1f2929] text-[#40b0b0]' : 'bg-transparent text-zinc-600 group-hover:text-zinc-400 group-hover:bg-zinc-800/50'
                        }`}>
                            <i className={`${sector.icon} text-2xl`}></i>
                        </div>

                        {/* Text */}
                        <span className={`text-lg lg:text-xl font-extrabold tracking-tight transition-all duration-300 ${
                          isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                        }`}>
                          {sector.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Animated Arrow Icon */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive ? 'bg-transparent text-[#40b0b0] scale-100' : 'bg-transparent text-zinc-700 group-hover:text-zinc-500 scale-90 opacity-0 group-hover:opacity-100'
                        }`}>
                          <i className={`ri-arrow-right-line text-base transition-transform duration-300 ${isActive ? 'translate-x-1' : ''}`}></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Right Visuals - Massive Edge-to-Edge Image Showcase Container */}
          <div className="w-full lg:w-[60%] relative min-h-[450px] lg:min-h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/5">
            {sectors.map((sector, index) => (
              <div 
                key={`img-${sector.id}`}
                ref={el => imageRefs.current[index] = el}
                className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
                style={{ zIndex: activeTab === index ? 10 : 0 }}
              >
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Elegant overlay gradients for text readability inside dark card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

                {/* Overlay Content Box */}
                <div 
                  ref={el => textRefs.current[index] = el}
                  className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10 flex flex-col items-start pointer-events-auto"
                >
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 drop-shadow-2xl tracking-tighter leading-tight max-w-2xl">
                    {sector.title}
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base mb-6 max-w-xl leading-relaxed drop-shadow-lg font-medium border-l-4 border-[#1F5555] pl-4">
                    {sector.desc}
                  </p>
                  
                  <button className="flex items-center gap-3 bg-[#FFB600] text-black px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group/btn transform hover:-translate-y-1">
                    Explore Projects 
                    <i className="ri-arrow-right-up-line text-base group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
