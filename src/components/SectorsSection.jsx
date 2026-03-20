import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Importing assets
import metroImg from '../assets/sectors/metro_rail.png';
import undergroundImg from '../assets/sectors/underground_metro.png';
import highwayImg from '../assets/sectors/highway.png';
import railwayImg from '../assets/sectors/railway.png';
import bridgeImg from '../assets/sectors/bridge.png';
import industrialImg from '../assets/sectors/industrial.png';
import tunnellingImg from '../assets/sectors/tunnelling.png';

const sectors = [
  {
    id: 1,
    title: "Metro & High Speed Rail",
    image: metroImg,
    desc: "Pioneering the future of urban mobility with cutting-edge elevated and high-speed rail infrastructures."
  },
  {
    id: 2,
    title: "Underground Metro",
    image: undergroundImg,
    desc: "Managing complex subterranean environments to deliver seamless underground transit solutions."
  },
  {
    id: 3,
    title: "Highway",
    image: highwayImg,
    desc: "Connecting nations with robust, intelligently designed multi-lane highways and expressways."
  },
  {
    id: 4,
    title: "Railway",
    image: railwayImg,
    desc: "Modernizing rail networks with precise engineering for freight and passenger transport efficiency."
  },
  {
    id: 5,
    title: "Bridge",
    image: bridgeImg,
    desc: "Engineering iconic structures that span challenges, ensuring durability and architectural elegance."
  },
  {
    id: 6,
    title: "Industrial",
    image: industrialImg,
    desc: "Building the backbone of industry with comprehensive plant and facility infrastructure designs."
  },
  {
    id: 7,
    title: "Tunnelling Works",
    image: tunnellingImg,
    desc: "Expertise in specialized tunnelling techniques for water, power, and transport networks."
  }
];

const SectorsSection = () => {
  const [activeId, setActiveId] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const autoPlayRef = useRef(null);

  const activeSector = sectors.find(s => s.id === activeId);

  // Auto-play logic
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveId(prev => (prev % sectors.length) + 1);
      }, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying]);

  // Animation on sector change
  useEffect(() => {
    if (imageRef.current && contentRef.current) {
      const tl = gsap.timeline();
      
      // Wipe-out effect for current content (optional, or just overlay)
      tl.to(imageRef.current, {
        clipPath: 'inset(0 0 0 100%)',
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          // Set new state (if needed, but state already updated)
        }
      })
      .set(imageRef.current, { clipPath: 'inset(0 100% 0 0)' })
      .to(imageRef.current, {
        clipPath: 'inset(0 0 0 0)',
        duration: 0.6,
        ease: 'power2.out'
      })
      .fromTo(contentRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        "-=0.3"
      );
    }
  }, [activeId]);

  return (
    <section className="py-20 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1.5 h-10 bg-[#FFB600]"></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
            <span className="text-[#1F5555]">Sectors,</span> we Do!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch min-h-[500px]">
          
          {/* Left Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
            {sectors.map((sector) => (
              <button
                key={sector.id}
                onMouseEnter={() => {
                  setActiveId(sector.id);
                  setIsAutoPlaying(false);
                }}
                onMouseLeave={() => setIsAutoPlaying(true)}
                onClick={() => setActiveId(sector.id)}
                className={`relative pl-6 py-4 text-left transition-all duration-300 group border-l-2 ${
                  activeId === sector.id 
                  ? 'border-[#1F5555] bg-white shadow-sm scale-[1.02] z-10' 
                  : 'border-transparent hover:border-zinc-300'
                }`}
              >
                {/* Progress bar for active item */}
                {activeId === sector.id && isAutoPlaying && (
                  <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[#FFB600] animate-progress-vertical"></div>
                )}
                
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-bold ${activeId === sector.id ? 'text-[#FFB600]' : 'text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity'}`}>
                    0{sector.id}
                  </span>
                  <h3 className={`text-lg md:text-xl font-bold transition-all ${
                    activeId === sector.id ? 'text-[#1F5555]' : 'text-zinc-500 group-hover:text-zinc-800'
                  }`}>
                    {sector.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Right Content Overlay */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl group min-h-[400px] lg:min-h-full">
            <div 
              ref={imageRef}
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110"
              style={{ backgroundImage: `url(${activeSector.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            <div 
              ref={contentRef}
              className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white"
            >
              <h4 className="text-sm font-bold tracking-widest uppercase text-[#FFB600] mb-4">Sector Focus</h4>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">{activeSector.title}</h3>
              <p className="text-lg md:text-xl text-zinc-200 max-w-xl leading-relaxed">
                {activeSector.desc}
              </p>
              
              <button className="mt-8 px-8 py-3 bg-[#1F5555] hover:bg-[#1a4a4a] text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2 group/btn">
                View Projects
                <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress-vertical {
          0% { height: 0%; top: 0; }
          100% { height: 100%; top: 0; }
        }
        .animate-progress-vertical {
          animation: progress-vertical 5s linear forwards;
        }
      `}} />
    </section>
  );
};

export default SectorsSection;
