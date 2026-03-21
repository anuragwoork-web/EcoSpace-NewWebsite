import React from 'react';

// Import all client logos
import img1 from '../assets/Our Clients/Afcons.png';
import img2 from '../assets/Our Clients/Ashoka-Buildcon.png';
import img3 from '../assets/Our Clients/Asitya-Birla-Group.png';
import img4 from '../assets/Our Clients/DRA.png';
import img5 from '../assets/Our Clients/GRIL-Infra.png';
import img6 from '../assets/Our Clients/Gawar.png';
import img7 from '../assets/Our Clients/Glenmark.png';
import img8 from '../assets/Our Clients/HCC.png';
import img9 from '../assets/Our Clients/HGIEL.png';
import img10 from '../assets/Our Clients/IJM-India.png';
import img11 from '../assets/Our Clients/Iron-International-Limited.png';
import img12 from '../assets/Our Clients/J.-Kumar.png';
import img13 from '../assets/Our Clients/KEC.png';
import img14 from '../assets/Our Clients/LT.png';
import img15 from '../assets/Our Clients/OSE-Infra.png';
import img16 from '../assets/Our Clients/Punj-Lloyd.png';
import img17 from '../assets/Our Clients/Rail-Vikas-Niham.png';
import img18 from '../assets/Our Clients/Raitecih.png';
import img19 from '../assets/Our Clients/SP-Infra.png';
import img20 from '../assets/Our Clients/Sam-Indisa.png';
import img21 from '../assets/Our Clients/Tata-Projects.png';
import img22 from '../assets/Our Clients/Vishwas-Mudra-Engineering.png';
import img23 from '../assets/Our Clients/continetal.png';
import img24 from '../assets/Our Clients/monte-carlo.png';

const ClientsSection = () => {
    // Array of mapped logos
    const clients = [
        { id: 1, name: "Afcons", src: img1 },
        { id: 2, name: "Ashoka Buildcon", src: img2 },
        { id: 3, name: "Aditya Birla Group", src: img3 },
        { id: 4, name: "DRA", src: img4 },
        { id: 5, name: "GRIL Infra", src: img5 },
        { id: 6, name: "Gawar", src: img6 },
        { id: 7, name: "Glenmark", src: img7 },
        { id: 8, name: "HCC", src: img8 },
        { id: 9, name: "HGIEL", src: img9 },
        { id: 10, name: "IJM India", src: img10 },
        { id: 11, name: "Ircon Intl", src: img11 },
        { id: 12, name: "J. Kumar", src: img12 },
        { id: 13, name: "KEC", src: img13 },
        { id: 14, name: "L&T", src: img14 },
        { id: 15, name: "OSE Infra", src: img15 },
        { id: 16, name: "Punj Lloyd", src: img16 },
        { id: 17, name: "Rail Vikas Nigam", src: img17 },
        { id: 18, name: "Raitecih", src: img18 },
        { id: 19, name: "SP Infra", src: img19 },
        { id: 20, name: "Sam India", src: img20 },
        { id: 21, name: "Tata Projects", src: img21 },
        { id: 22, name: "Vishwas Mudra", src: img22 },
        { id: 23, name: "Continental", src: img23 },
        { id: 24, name: "Monte Carlo", src: img24 },
    ];

    // Split into two rows for a massive premium dual-track effect
    const row1 = clients.slice(0, 12);
    const row2 = clients.slice(12, 24);

    // Duplicate arrays to create the infinite looping illusion
    const loopRow1 = [...row1, ...row1];
    const loopRow2 = [...row2, ...row2];

    return (
        <section className="py-20 md:py-28 bg-[#FAFAFA] overflow-hidden relative border-b border-zinc-100">
            
            <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 mb-16 relative z-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-1 bg-[#FFB600] mb-5 rounded-full"></div>
                    <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-[#111111] leading-none mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F5555] to-[#40b0b0]">Clients</span>
                    </h2>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex flex-col gap-6 md:gap-10 overflow-hidden group py-4 z-10">
                {/* Extensive Fade Overlays for seamless edge transition */}
                <div className="absolute top-0 left-0 w-32 md:w-80 h-full bg-gradient-to-r from-[#FAFAFA] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 md:w-80 h-full bg-gradient-to-l from-[#FAFAFA] to-transparent z-20 pointer-events-none"></div>

                {/* Track 1 - Scrolling Left */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                    {loopRow1.map((client, index) => (
                        <div 
                            key={`row1-${client.id}-${index}`} 
                            className="w-[200px] md:w-[320px] h-28 md:h-40 mx-4 md:mx-6 flex items-center justify-center transition-all duration-300 cursor-pointer bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/[0.03] hover:shadow-[0_15px_40px_rgba(31,85,85,0.12)] hover:-translate-y-2 group/card"
                        >
                            <img 
                                src={client.src} 
                                alt={client.name} 
                                className="w-[85%] h-[85%] object-contain transition-all duration-500 mix-blend-multiply opacity-85 group-hover/card:opacity-100 group-hover/card:scale-110" 
                            />
                        </div>
                    ))}
                </div>

                {/* Track 2 - Scrolling Right */}
                <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] items-center ml-[-15%]">
                    {loopRow2.map((client, index) => (
                        <div 
                            key={`row2-${client.id}-${index}`} 
                            className="w-[200px] md:w-[320px] h-28 md:h-40 mx-4 md:mx-6 flex items-center justify-center transition-all duration-300 cursor-pointer bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/[0.03] hover:shadow-[0_15px_40px_rgba(31,85,85,0.12)] hover:-translate-y-2 group/card"
                        >
                            <img 
                                src={client.src} 
                                alt={client.name} 
                                className="w-[85%] h-[85%] object-contain transition-all duration-500 mix-blend-multiply opacity-85 group-hover/card:opacity-100 group-hover/card:scale-110" 
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); } 
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); } 
                }
                .animate-marquee {
                    animation: marquee 45s linear infinite; 
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 45s linear infinite; 
                }
            `}} />
        </section>
    );
};

export default ClientsSection;
