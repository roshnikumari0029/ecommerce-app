import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div >

     <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={' US'}/>
     </div>

     <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever Living Products is a multi-level marketing company which was founded in 1978 in Tempe, Arizona by Rex Maughan.[1] The company has reported a network of 9.3 million distributors and revenue of $4 billion in 2021, and in 2006 they reported having 4,100 employees.</p>
          <p>Forever Living was founded in 1978 in Tempe, Arizona by Rex Maughan.[1] By the 1990s, Rex Maughan had purchased the Texas company Aloe Vera of America, with Aloe Vera of America selling its products to Forever Living for distribution.[4] Some journalists have likened the multi-level marketing business model of Forever Living's distribution system to that of a pyramid scheme.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to create a profitable environment where individuals can, with dignity, be what they want to be, where integrity, empathy and fun are our guides.</p>
        </div>
     </div>

     <div className='text-xl py-4'>
         <Title text1={'WHY'} text2={'CHOOSE US'}/>
     </div>
        
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Quality Assurance:</b>
             <p className='text-gray-600'> seeking out nature's best sources for health and beauty and sharing them with the world.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Convenience:</b>
             <p className='text-gray-600'>It has made shopping so much more comfortable and more accessible that people engage in online shopping anywhere and everywhere. Just swiftly pull out your phone and start searching for products, and you are ready to shop.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Exceptional Customer Service:</b>
             <p className='text-gray-600'>It has made shopping so much more comfortable and more accessible that people engage in online shopping anywhere and everywhere. Just swiftly pull out your phone and start searching for products, and you are ready to shop.</p>
          </div>
        </div>

        <NewsletterBox/>
    </div>
  )
}

export default About