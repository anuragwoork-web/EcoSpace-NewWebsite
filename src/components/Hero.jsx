import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import heroBg from "../assets/hero/hero-bg.jpg";
import CTA from "./CTA";

const Hero = () => {
    // ⬇️ Background Settings (Change values here to adjust)
    const bgImageOpacity = 1;         // Image ki transparency (0 to 1) 
    const overlayDarknessTop = 1;   // Upar ka andhera (0 to 0.7)
    const overlayDarknessBottom = 0.7; // Neeche ka andhera (0 to 1)
    const iconColor = "#FFB600";       // Since 2011 ke sath wale icon ka color

    let hello = useRef();
    let slide = useRef();
    let text = useRef();
    let arrow = useRef();

    const sceneState = useRef("intro");
    const tl = useRef(null);

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(slide.current, {
            left: '0%',
            duration: 0.5,
        }, 'a')

        // Choose responsive x and y values
        let xVal = '0%';
        let yVal = '0%';
        if (window.innerWidth < 640) {
            xVal = '0%'; // Mobile - keep it centered
            yVal = '-75%'; // Mobile - move it up slightly
        } else if (window.innerWidth < 1024) {
            xVal = '15%'; // Tablet
            yVal = '0%'; // Tablet - no vertical shift
        } else {
            xVal = '25%'; // Desktop
            yVal = '0%'; // Desktop - no vertical shift
        }
        tl.current.to(hello.current, {
            opacity: 1,
            x: xVal,
            y: yVal,
            duration: 0.5,
        }, 'a')

        tl.current.to(text.current, {
            opacity: 1,
            x: 0,
            y: 0, // Vertical position reset
            duration: 0.8, // Slightly longer for maximum smoothness
            ease: "power3.out"
        }, 'a+=0.15'); // Small delay after branding 

        tl.current.to('#main-header', {
            top: '0px',
            duration: 0.5,
        }, 'a');

        tl.current.to(arrow.current, {
            opacity: 0,
            duration: 0.5,
        }, 'a');

        const transitionToGreen = () => {
            if (sceneState.current !== 'intro') return;
            sceneState.current = 'transitioningToGreen';
            tl.current.play().then(() => {
                sceneState.current = 'green';
            });
        };

        const transitionToIntro = () => {
            if (sceneState.current !== 'green') return;
            sceneState.current = 'transitioningToIntro';
            tl.current.reverse().then(() => {
                sceneState.current = 'intro';
            });
        };

        const handleWheel = (e) => {
            if (sceneState.current === 'transitioningToGreen' || sceneState.current === 'transitioningToIntro') {
                e.preventDefault();
                return;
            }

            if (sceneState.current === 'intro') {
                e.preventDefault();
                if (e.deltaY > 0) {
                    transitionToGreen();
                }
            } else if (sceneState.current === 'green') {
                if (window.scrollY <= 0 && e.deltaY < 0) {
                    e.preventDefault();
                    transitionToIntro();
                }
            }
        };

        let touchStartY = 0;
        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            const touchEndY = e.touches[0].clientY;
            const deltaY = touchStartY - touchEndY;

            if (sceneState.current === 'transitioningToGreen' || sceneState.current === 'transitioningToIntro') {
                e.preventDefault();
                return;
            }

            if (sceneState.current === 'intro') {
                e.preventDefault();
                if (deltaY > 0) {
                    transitionToGreen();
                }
            } else if (sceneState.current === 'green') {
                if (window.scrollY <= 0 && deltaY < 0) {
                    e.preventDefault();
                    transitionToIntro();
                }
            }
        };

        const preventKeys = (e) => {
            if (sceneState.current === 'intro' || sceneState.current.startsWith('transitioning')) {
                // Prevent scrolling via keys
                if ([32, 33, 34, 38, 40].includes(e.keyCode)) {
                    e.preventDefault();
                    if ((e.keyCode === 32 && !e.shiftKey) || e.keyCode === 34 || e.keyCode === 40) {
                        if (sceneState.current === 'intro') transitionToGreen();
                    }
                }
            } else if (sceneState.current === 'green' && window.scrollY <= 0) {
                if ((e.keyCode === 32 && e.shiftKey) || e.keyCode === 33 || e.keyCode === 38) {
                    e.preventDefault();
                    transitionToIntro();
                }
            }
        };

        const handleScroll = () => {
            if (sceneState.current === 'intro' || sceneState.current.startsWith('transitioning')) {
                window.scrollTo(0, 0);
            }
        };

        // If the page loads scrolled down, instantly transition to green
        if (window.scrollY > 0) {
            sceneState.current = 'green';
            tl.current.progress(1);
        }

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("keydown", preventKeys, { passive: false });
        window.addEventListener("scroll", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("keydown", preventKeys);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="h-[100dvh] w-[100vw] relative overflow-hidden bg-black">
            {/* Background Video covering entire screen */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-[0.14]">
                <iframe
                    src="https://www.youtube.com/embed/dCo_hby6qrY?autoplay=1&mute=1&loop=1&playlist=dCo_hby6qrY&controls=0&showinfo=0&rel=0"
                    className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                ></iframe>
            </div>

            <div
                className="h-full w-[100vw] absolute top-0 z-10"
                ref={slide}
                style={{
                    left: '-100%'
                }}
            >
                {/* The green textured background */}
                <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">
                    {/* Background Image Layer */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${heroBg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            opacity: bgImageOpacity
                        }}
                    ></div>
                    {/* Black Overlay Layer (with Gradient) */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayDarknessTop}), rgba(0, 0, 0, ${overlayDarknessBottom}))`,
                        }}
                    ></div>
                </div>
                {/* Left side content (Since 2011...) */}
                <div className="w-[88%] absolute left-[6%] bottom-[22%] opacity-0 sm:w-[48%] sm:bottom-auto sm:top-[55%] sm:-translate-y-[50%] sm:left-[5%] md:left-[6%] lg:left-[8%] xl:left-[10%] lg:w-[42%] xl:w-[40%] -translate-x-[60%] translate-y-[30px] z-[30]" ref={text}>
                    <div className="mini-head flex items-center gap-1 mb-2 sm:mb-3">
                        <svg
                            className="w-[4vw] sm:w-[1.4rem] md:w-[1.6rem] lg:w-[1.9rem] svg-inline--fa fa-wave-square fa-w-20"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="wave-square"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                        >
                            <path
                                fill={iconColor}
                                d="M476 480H324a36 36 0 0 1-36-36V96h-96v156a36 36 0 0 1-36 36H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h112V68a36 36 0 0 1 36-36h152a36 36 0 0 1 36 36v348h96V260a36 36 0 0 1 36-36h140a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H512v156a36 36 0 0 1-36 36z"
                            ></path>
                        </svg>
                        <h3 className="text-[3.5vw] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.9rem] text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]">Since 2011</h3>
                    </div>
                    <div className="head-para">
                        <h1 className="font-bold tracking-wide text-[4.5vw] leading-tight sm:text-[1.8rem] sm:leading-9 md:text-[2rem] md:leading-10 lg:text-[2.2rem] xl:text-[2.45rem] text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]">
                            India's Leading Infrastructures <span className="text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">Design & Project Management</span> Consultancy
                        </h1>
                        <p className="text-white text-[3vw] sm:text-[1rem] leading-5 sm:leading-6 md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] mt-4 sm:mt-7">
                            We adopt a 4P's approach <span className="font-semibold text-[#FFB600]">Passionate, Purposeful, Precise & Persistent</span> to deliver the task and meet our client expectations.
                        </p>
                    </div>
                </div>
                {/* CTA Bar at bottom of Hero Scene */}
                <div className="absolute bottom-0 left-0 w-full z-[40]">
                    <CTA />
                </div>
            </div>

            {/* Branding - Independent of sliding green container */}
            <div className="hello w-full absolute left-0 top-[50%] sm:top-[48%] -translate-y-[50%] flex flex-col items-center z-20 pointer-events-none" ref={hello}>
                <h1 className="text-[19vw] font-bold leading-none sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] text-center">
                    <span className="text-[#37b564] drop-shadow-md">Eco</span>
                    <span className="text-white drop-shadow-md">Space</span>
                </h1>
                <div className="flex flex-col items-center mt-1 sm:mt-2">
                    <h2 className="text-[7.5vw] font-semibold leading-none sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-zinc-100 text-center drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">Infrastructures </h2>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-[4vw] h-[4vw] rounded-full bg-[#FFB600] sm:w-[0.8rem] sm:h-[0.8rem] md:w-[1rem] md:h-[1rem]"></div>
                        <h3 className="text-[5.5vw] font-medium leading-none sm:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] text-zinc-100 text-center drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">Pvt. Ltd.</h3>
                        <div className="w-[4vw] h-[4vw] rounded-full bg-[#FFB600] sm:w-[0.8rem] sm:h-[0.8rem] md:w-[1rem] md:h-[1rem]"></div>
                    </div>
                </div>
            </div>

            <i className="arrow absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-white text-[4vw] sm:text-[1.2rem] md:text-[1.4rem] ri-arrow-down-line z-20 animate-bounce" ref={arrow}></i>
        </div>
    );
};

export default Hero;
