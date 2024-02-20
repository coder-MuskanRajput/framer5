import React from 'react'
import Navbar from './Components/Navbar'
import Marquee from './Components/Marquee'
import Image from './Components/Image'
import Details from './Components/Details'


const App = () => {
  return (
    <>
     <div className='w-full h-screen bg-zinc-900 text-zinc-200'>
          <Navbar/>
          <Marquee/>
          <Image/>
          <Details/>
     </div>
    </>
  )
}

export default App