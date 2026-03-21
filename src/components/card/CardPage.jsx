import React from 'react'
import Card from './Card'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'

const CardPage = () => {
  return (
    <div className='py-24 md:py-32 bg-white max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12'>
      <div className='flex flex-col md:flex-row justify-between items-end gap-10 mb-20'>
        <div className="max-w-4xl relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-[#FFB600] rounded-full"></div>
            <h4 className="text-[#1F5555] font-black tracking-[0.3em] text-sm md:text-sm uppercase">Our Expertise</h4>
          </div>
          <h3 className='text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tighter text-[#111111] leading-[1.1]'>
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F5555] to-[#40b0b0]">Services.</span>
          </h3>
        </div>
        <p className='text-md md:text-xl text-[#666] max-w-2xl font-medium leading-relaxed border-l-4 border-zinc-100 pl-8 pb-2'>
          We specialize in delivering high-quality engineering and project management solutions across various sectors with a focus on uncompromising precision.
        </p>
      </div>
      
      <div className='grid gap-8 md:gap-10 justify-center sm:grid-cols-2 lg:grid-cols-4 mt-12 relative'>
        {/* Decorative Grid Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-100 -z-10 hidden lg:block"></div>
        
        <Card 
          icon={card1} 
          head='Pre-Bid Services' 
          para='Professional assistance in bid preparation, tender analysis, and strategic documentation.' 
        />
        <Card 
          icon={card2} 
          head='Design Engineering' 
          para='Precise engineering solutions including structural design and technical specifications.' 
        />
        <Card 
          icon={card3} 
          head='Review Engineering' 
          para='Comprehensive review and verification of engineering designs to ensure performance.' 
        />
        <Card 
          icon={card4} 
          head='Project Management' 
          para='End-to-end project oversight, planning, and execution management.' 
        />
      </div>
    </div>
  )
}

export default CardPage
