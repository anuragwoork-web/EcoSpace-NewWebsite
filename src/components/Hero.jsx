import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
    let hello = useRef();
    let slide = useRef();
    let text = useRef();

    const sceneState = useRef("intro");
    const tl = useRef(null);

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(slide.current, {
            left: '0%',
            duration: 0.5,
        }, 'a')

        tl.current.to(hello.current, {
            opacity: 1,
            x: '25%',
            duration: 0.5,
        }, 'a')

        tl.current.to(text.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
        }, 'a');

        tl.current.to('#main-header', {
            top: '0px',
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
                <div
                    className="absolute top-0 left-0 w-full h-full z-[-1]"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.9,
                    }}
                />
                {/* Left side content (Since 2018...) */}
                <div className="w-[88%] absolute left-[6%] bottom-16 opacity-0 sm:w-[50%] sm:bottom-auto sm:top-[50%] sm:-translate-y-[50%] sm:left-[5%] md:left-[6%] lg:left-[8%] xl:left-[10%] lg:w-[42%] xl:w-[40%] -translate-x-[20%]" ref={text}>
                    <div className="mini-head flex items-center gap-1">
                        <svg
                            className="w-[5vw] sm:w-[1.4rem] md:w-[1.6rem] lg:w-[1.9rem] svg-inline--fa fa-wave-square fa-w-20"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="wave-square"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                        >
                            <path
                                fill="currentColor"
                                d="M476 480H324a36 36 0 0 1-36-36V96h-96v156a36 36 0 0 1-36 36H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h112V68a36 36 0 0 1 36-36h152a36 36 0 0 1 36 36v348h96V260a36 36 0 0 1 36-36h140a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H512v156a36 36 0 0 1-36 36z"
                            ></path>
                        </svg>
                        <h3 className="text-[4.5vw] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.9rem] text-white">Since 2018</h3>
                    </div>
                    <div className="head-para">
                        <h1 className="font-semibold tracking-wide text-[5.5vw] leading-tight sm:text-[1.8rem] sm:leading-9 md:text-[2rem] md:leading-10 lg:text-[2.2rem] xl:text-[2.45rem] text-white">
                            The World's Leading Provider of Digital Transformation Solutions
                        </h1>
                        <p className="text-white text-[3.5vw] sm:text-[1rem] leading-5 sm:leading-6 md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] mt-3 sm:mt-4">
                            We, EcoSpace Infera, are web, mobile, and enterprise development
                            specialists who design and create solutions to keep your company
                            future-proof in an ever-changing environment.
                        </p>
                    </div>
                </div>
            </div>

            {/* Branding - Independent of sliding green container */}
            <div className="hello w-full absolute left-0 top-[42%] sm:top-[45%] -translate-y-[50%] flex flex-col items-center z-20 pointer-events-none" ref={hello}>
                <h1 className="text-[13vw] font-bold leading-none sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] text-center">
                    <span className="text-white drop-shadow-md">Eco</span>
                    <span className="text-[#FFB600] drop-shadow-md">Space</span>
                </h1>
                <div className="flex flex-col items-center mt-1 sm:mt-2">
                    <h2 className="text-[5vw] font-semibold leading-none sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-zinc-100 text-center drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">Inferastructures</h2>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-[#FFB600] sm:w-[0.8rem] sm:h-[0.8rem] md:w-[1rem] md:h-[1rem]"></div>
                        <h3 className="text-[3.5vw] font-medium leading-none sm:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] text-zinc-100 text-center drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">Pvt. Ltd.</h3>
                        <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-[#FFB600] sm:w-[0.8rem] sm:h-[0.8rem] md:w-[1rem] md:h-[1rem]"></div>
                    </div>
                </div>
            </div>

            <i className="arrow absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-white text-[4vw] sm:text-[1.2rem] md:text-[1.4rem] ri-arrow-down-line z-20 animate-bounce"></i>
        </div>
    );
};

export default Hero;
