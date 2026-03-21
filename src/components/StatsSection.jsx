import React, { useEffect, useRef, useState } from 'react';

// Helper component for animating numbers
const Counter = ({ target, suffix, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0); // Reset when out of view
            return;
        }
        
        let start = 0;
        const duration = 2000; // 2 seconds animation
        // Calculate increment per frame (assuming 60fps ~ 16ms per frame)
        const increment = target / (duration / 16); 
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, isVisible]);

    return <span>{count} {suffix}</span>;
};

const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        { id: 1, target: 50, suffix: "+", label: "Trusted Clients", icon: "ri-user-star-line" },
        { id: 2, target: 210, suffix: "+", label: "Projects Completed", icon: "ri-checkbox-circle-line" },
        { id: 3, target: 190, suffix: "+", label: "Pre-Bids Cover", icon: "ri-coins-line" },
        { id: 4, target: 20, suffix: "+", label: "Detail Engineering", icon: "ri-computer-line" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Optional: reset animation when scrolling away
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
                    
                    {/* Stats List */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 flex-grow">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col items-center text-center group">
                                <div className="w-14 h-14 rounded-2xl bg-[#f8f9fa] flex items-center justify-center mb-6 group-hover:bg-[#1F5555] group-hover:text-white transition-all duration-500 shadow-sm">
                                    <i className={`${stat.icon} text-3xl text-[#1F5555] group-hover:text-white transition-colors duration-500`}></i>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] mb-2 transition-transform duration-300 group-hover:scale-105">
                                    <Counter target={stat.target} suffix={stat.suffix} isVisible={isVisible} />
                                </h2>
                                <p className="text-[#1F5555] font-bold uppercase tracking-widest text-[0.7rem] md:text-xs">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Vision Button */}
                    <div className="relative group cursor-pointer shrink-0 lg:ml-10">
                        <div className="bg-black px-10 py-8 -skew-x-12 group-hover:bg-[#1F5555] group-hover:skew-x-0 transition-all duration-500 relative z-20">
                            <h2 className="text-white text-xl md:text-2xl font-black skew-x-12 group-hover:skew-x-0 transition-all duration-500 text-center uppercase tracking-tighter leading-tight">
                                Inspired By <br /> 
                                <span className="text-[#FFB600]">Our Vision</span>
                            </h2>
                        </div>
                        {/* Interactive glow effect */}
                        <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#FFB600] -z-10 -skew-x-12 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 opacity-100"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StatsSection;
