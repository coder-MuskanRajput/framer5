import { motion } from 'framer-motion'
import gsap, { Circ, Power4 } from 'gsap/all'
import React, { useEffect, useRef, useState } from 'react'

const Image = () => {

  const img = useRef(null)

   useEffect(() =>{
    window.addEventListener("mousemove" , function(e){
      // console.log(e.clientX);
      // 0    window.innerWidth
            
      if(e.clientX < window.innerWidth/2){
        //  console.log("Left side");
         var val = gsap.utils.mapRange(0, window.innerWidth/2 ,0 , 1 ,e.clientX)
         const lerp = (x,y,a) => x * ( 1 - a ) + y * a ;
         let move = lerp(-200 ,0 , val)

         gsap.to(img.current , {
          x : move + "px",
          ease : Circ,
          duration : .5
         })
      }
      else{
        // console.log("Right side");
        var val = gsap.utils.mapRange( window.innerWidth/2 , window.innerWidth , 1 , 0 ,e.clientX)
        const lerp = (x,y,a) => x * ( 1 - a ) + y * a ;
        let move = lerp(200 ,0 , val)

        gsap.to(img.current , {
         x : move + "px",
         ease : Circ,
         duration : .5
        })

      }
    })
   })

  // const [move, setMove] = useState({top:"50%" , left:"60%"});
  // useEffect(()=>{
  //   window.addEventListener("mousemove" , function(e){
  //     // console.log(e.clientX , e.clientY);
  //     setMove({top : e.clientY + "px" , left: e.clientX + "px"});
  //   })
  // })
  return (
    <div>
      {/* <motion.img
       initial={{top: move.top , left : move.left}}
       animate= {{top : move.top , left : move.left}}
       transition={{ease :[0.25, 1, 0.5, 1] , duration :2}}
       className='fixed z-[2] w-96 top-1/2 left-[60%] -translate-x-[50%] -translate-y-[50%]' src="https://images.unsplash.com/photo-1568038479111-87bf80659645?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

       <img ref={img} className='fixed z-[2] w-96 top-1/2 left-[60%] -translate-x-[50%] -translate-y-[50%]' src="https://images.unsplash.com/photo-1568038479111-87bf80659645?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

export default Image