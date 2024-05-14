import {motion} from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
   
      <div className='w-full py-10 bg-[#20534d]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[5vw] text-white leading-relaxed font-semibold pr-10 pt-2 -mb-5'>Echoes across Languages</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[5vw] text-white leading-relaxed font-semibold pr-10 pt-2 -mb-5'>Echoes across Languages</motion.h1>
        </div>
      </div>
  )
}

export default Marquee
