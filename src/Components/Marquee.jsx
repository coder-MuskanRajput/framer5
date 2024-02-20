import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-5 whitespace-nowrap overflow-hidden flex mt-20'>
        <motion.div 
        initial = {{ x : "0" }} 
        animate = {{ x: "-100%" }} 
        transition = {{ repeat: Infinity , ease : "linear" , duration : 30 }}
        className='line text-[10vw] font-regular leading-none tracking-tight'
        >
          
        Get in touch · 保持联系 · Ponerse en contacto · Neem contact op · &nbsp;
        
        </motion.div>
        <motion.div 
        initial = {{ x : "0" }} 
        animate = {{ x: "-100%" }} 
        transition = {{ repeat: Infinity , ease : "linear" , duration : 30 }}
        className='line text-[10vw] font-regular leading-none tracking-tight'
        >
          
        Get in touch · 保持联系 · Ponerse en contacto · Neem contact op · &nbsp;
        
        </motion.div>
    </div>
  )
}

export default Marquee