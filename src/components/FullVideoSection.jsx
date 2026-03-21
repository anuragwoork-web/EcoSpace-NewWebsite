import React from 'react';
import constructionVideo from '../assets/Videos/Construction.mp4';

const FullVideoSection = () => {
    return (
        <section className="w-full h-[50vh] md:h-[65vh] lg:h-[75vh] bg-black overflow-hidden relative">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src={constructionVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Optional Overlay to match site theme */}
            <div className="absolute inset-0 bg-black/10"></div>
        </section>
    );
};

export default FullVideoSection;
