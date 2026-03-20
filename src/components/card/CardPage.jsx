import React from 'react'
import Card from './Card'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'

const CardPage = () => {
  return (
    <div className='mt-8 md:mt-12 max-w-[1600px] mx-auto px-4'>
      <div className='text-center flex flex-col items-center gap-3 mb-10'>
        <h3 className='uppercase text-xl md:text-2xl font-bold lg:text-[2.5rem] tracking-tight text-[#111111]'>
          <span className="text-[#1F5555]">Services,</span> we do!
        </h3>
        <p className='text-md md:text-lg text-[#555555] w-[90%] md:w-[60%] lg:w-[50%] font-medium'>
          We specialize in delivering high-quality engineering and project management solutions across various sectors with a focus on precision and excellence.
        </p>
      </div>
      
      <div className='grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:px-6 mt-12 mb-16'>
        <Card 
          icon={card1} 
          head='Pre-Bid Services' 
          para='Professional assistance in bid preparation, tender analysis, and strategic documentation to secure major infrastructure projects.' 
        />
        <Card 
          icon={card2} 
          head='Detailed Design Engineering' 
          para='Precise engineering solutions including structural design, architectural planning, and technical specifications for diverse sectors.' 
        />
        <Card 
          icon={card3} 
          head='Review Engineering' 
          para='Comprehensive review and verification of engineering designs to ensure safety, compliance, and optimal performance.' 
        />
        <Card 
          icon={card4} 
          head='Project Management Consultancy' 
          para='End-to-end project oversight, planning, and execution management to deliver projects within time and budget.' 
        />
      </div>
    </div>
  )
}

export default CardPage
