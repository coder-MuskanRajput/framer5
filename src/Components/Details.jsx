import React from 'react'

const Details = () => {
  return (
    <div className='w-full py-10 px-40 mt-20  flex justify-between'>
      <div>
      <h1>Ready for lift-off? Ping, tweet, message or poke <br /> — and we will get back as soon as possible.</h1>
        <div className='linksOfBtm mt-16'>
        <a className='font-regular block mt-3 text-lg' href="#">exmple@exo.com</a>
        <a className='font-regular block mt-3 text-lg' href="#">+91-9887676787</a>
        </div>
        </div>

        <div className='mt-16'>
          <h4>Willem II Singel 8 <br /> 
        6041 HS, Roermond <br /> 
        The Netherlands
      </h4>
      <a className='font-light block mt-5 text-lg' href="#">view on maps</a>

        </div>
    </div>
  )
}

export default Details