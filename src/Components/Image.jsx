import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Image = () => {
  const [move, setMove] = useState({top:"50%" , left:"60%"});
  useEffect(()=>{
    window.addEventListener("mousemove" , function(e){
      // console.log(e.clientX , e.clientY);
      setMove({top : e.clientY + "px" , left: e.clientX + "px"});
    })
  })
  return (
    <div>
      <motion.img
       initial={{top: move.top , left : move.left}}
       animate= {{top : move.top , left : move.left}}
       transition={{ease :[0.25, 1, 0.5, 1] , duration :2}}
       className='fixed z-[2] w-96 top-1/2 left-[60%] -translate-x-[50%] -translate-y-[50%]' src="https://images.unsplash.com/photo-1568038479111-87bf80659645?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

export default Image