import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "We appreciate the professional approach and Quality work delivered by Ecospace Infrastructure Private Limited (EIPL) as per our expectations.",
    name: "PRANAV KUMAR",
    position: "HEAD - BUSINESS DEVELOPMENT",
    company: "TATA PROJECTS LIMITED"
  },
  {
    id: 2,
    text: "Their expertise and prompt execution in complex engineering environments have consistently met our high standards of delivery.",
    name: "RAHUL DESAI",
    position: "VP OPERATIONS",
    company: "L&T INFRASTRUCTURE"
  },
  {
    id: 3,
    text: "A truly reliable partner for large-scale infrastructure projects. Their focus on precision and safety is commendable.",
    name: "ANITA SHARMA",
    position: "PROJECT DIRECTOR",
    company: "NATIONAL HIGHWAYS AUTHORITY"
  },
  {
    id: 4,
    text: "Working with the team has been seamless. The quality of detail engineering and project management exceeded our requirements.",
    name: "VIKRAM SINGH",
    position: "CHIEF ENGINEER",
    company: "MUMBAI METRO RAIL CORP"
  }
];

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000); // Auto-scroll every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
            {/* Premium Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[400px] bg-[#1F5555] opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center">
                
                {/* Massive Golden Quotation Mark Graphic */}
                <div className="text-[10rem] md:text-[14rem] text-[#FFB600] leading-none opacity-10 font-serif absolute -top-8 md:-top-16 select-none">
                    "
                </div>

                {/* Testimonial Text Wrapper (Fixed height to prevent jumping) */}
                <div className="relative w-full h-[280px] md:h-[220px] lg:h-[200px] flex flex-col items-center justify-center mt-12 md:mt-20">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={testimonial.id}
                            className={`transition-all duration-1000 absolute w-full flex flex-col items-center text-center ${
                                index === activeIndex 
                                ? 'opacity-100 translate-y-0 pointer-events-auto shadow-2xl z-10' 
                                : 'opacity-0 translate-y-10 pointer-events-none z-0'
                            }`}
                        >
                            <h3 className="text-xl md:text-3xl lg:text-[2.2rem] font-medium leading-relaxed md:leading-[1.5] tracking-tight mb-8 md:mb-10 max-w-[900px] drop-shadow-md">
                                "{testimonial.text}"
                            </h3>
                            <div className="flex flex-col items-center gap-1">
                                <h4 className="text-[#FFB600] font-extrabold text-base md:text-xl uppercase tracking-widest">
                                    {testimonial.name}
                                </h4>
                                <p className="text-zinc-400 text-[0.65rem] md:text-sm font-bold tracking-widest uppercase mt-1">
                                    {testimonial.position}, <span className="text-zinc-200">{testimonial.company}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Interactive Navigation Dots */}
                <div className="flex gap-4 mt-12 md:mt-16 relative z-20">
                    {testimonials.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                                index === activeIndex 
                                ? 'w-12 bg-[#FFB600]' 
                                : 'w-4 bg-white/20 hover:bg-white/40'
                            }`}
                            aria-label={`Go to client testimonial ${index + 1}`}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default TestimonialSection;
