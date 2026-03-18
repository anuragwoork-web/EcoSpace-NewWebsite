import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroBg from "../assets/hero-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    let hello = useRef();
    let slide = useRef();
    let text = useRef();

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: slide.current,
                start: "3% top",
                toggleActions: "play reverse play reverse",
            },
        });

        tl.to(slide.current, {
            left: '50%',
            x: '-50%',
            duration: 0.5,
        }, 'a')

        tl.to(hello.current, {
            right: window.innerWidth < 640 ? '10%' : '-0%',
            duration: 0.5,
        }, 'a')

        tl.to(text.current, {
            opacity: 1,
            x: -15,
            duration: 0.5,
        }, 'a')
    }, []);

    return (
        <div className="h-[100vh] w-[100vw] relative overflow-hidden bg-white">
            {/* Background Video covering entire screen */}
            <div className="absolute top-0 left-0 w-full h-[100vh] z-0 pointer-events-none opacity-[0.14]">
                <iframe
                    src="https://www.youtube.com/embed/dCo_hby6qrY?autoplay=1&mute=1&loop=1&playlist=dCo_hby6qrY&controls=0&showinfo=0&rel=0"
                    className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                ></iframe>
            </div>

            {/* Slide container that animates */}
            <div
                className="h-[100vh] w-[100vw] absolute top-0 flex justify-between items-center p-8 lg:p-18"
                ref={slide}
                style={{
                    left: '-50%'
                }}
            >
                {/* The green textured background, placed behind the text in slide but semi-transparent so video shows */}
                <div 
                    className="absolute top-0 left-0 w-full h-full z-[-1]"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.90
                    }}
                ></div>
                <div className="w-[88%] absolute bottom-10 opacity-0 sm:w-[50%] sm:top-[50%] sm:-translate-y-[50%] lg:flex lg:flex-col lg:w-[40%] lg:justify-center" ref={text}>
                    <div className="mini-head flex items-center gap-1">
                        <svg
                            className="w-[6vw] sm:w-[1.6rem] lg:w-[1.9rem] svg-inline--fa fa-wave-square fa-w-20"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="wave-square"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            data-fa-i2svg=""
                        >
                            <path
                                fill="currentColor"
                                d="M476 480H324a36 36 0 0 1-36-36V96h-96v156a36 36 0 0 1-36 36H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h112V68a36 36 0 0 1 36-36h152a36 36 0 0 1 36 36v348h96V260a36 36 0 0 1 36-36h140a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H512v156a36 36 0 0 1-36 36z"
                            ></path>
                        </svg>
                        <h3 className="text-[6vw] sm:text-[1.6rem] lg:text-[1.9rem] text-white">Since 2018</h3>
                    </div>
                    <div className="head-para">
                        <h1 className="font-semibold tracking-wide text-[7.5vw] sm:text-[2.2rem] sm:leading-10 lg:text-[2.2rem] xl:text-[2.45rem]">
                            The World's Leading Provider of Digital Transformation Solutions
                        </h1>
                        <p className="text-white text-[4.5vw] sm:text-[1.2rem] leading-6 lg:text-[1.2rem] xl:text-[1.4rem] mt-4">
                            We, EcoSpace Infera, are web, mobile, and enterprise development
                            specialists who design and create solutions to keep your company
                            future-proof in an ever-changing environment.
                        </p>
                    </div>
                </div>

                <div className="hello w-full absolute right-[-10%] top-[45%] -translate-y-[50%] sm:right-[5%] lg:right-[10%] flex flex-col items-end" ref={hello}>
                    <h1 className="text-[15vw] font-bold leading-none sm:text-[6rem] lg:text-[8rem] xl:text-[9rem] text-right">
                        <span className="text-white drop-shadow-md">Eco</span>
                        <span className="text-[#FFB600] drop-shadow-md">Space</span>
                    </h1>
                    <div className="flex flex-col items-end mt-2">
                        <h2 className="text-[6vw] font-semibold leading-none sm:text-[2.5rem] lg:text-[3.5rem] text-zinc-900 text-right drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">Inferastructures</h2>
                        <div className="flex items-center gap-2">
                            <h3 className="text-[4vw] font-medium leading-none sm:text-[1.5rem] lg:text-[2rem] text-zinc-900 text-right drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">Pvt. Ltd.</h3>
                            <div className="w-[3vw] h-[3vw] rounded-full bg-[#FFB600] sm:w-[1rem] sm:h-[1rem]"></div>
                        </div>
                    </div>
                </div>

                <i className="arrow absolute bottom-[10px] right-[10px] text-white text-[3.5vw] sm:text-[1.2rem] md:right-[23px] md:text-[1.4rem] ri-arrow-down-line"></i>
            </div>
        </div>
    );
};

export default Hero;