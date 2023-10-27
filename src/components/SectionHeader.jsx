"use client"

import {motion} from "framer-motion"
import { fadeIn } from "../../variants"

import React from 'react'

const SectionHeader = ({pretitle,title}) => {
  return (
    <div>
      <motion.h3
      variants={fadeIn('up',0.6)}
      initial="hidden"
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}
      className='text-3xl pretitle text-center text-[#811cfcf0]'>{pretitle}</motion.h3>
      <motion.h2 
      variants={fadeIn('up',0.4)}
      initial="hidden"
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}
      className='h2 text-center mb-8'>{title}
      </motion.h2>
    </div>
  )
}

export default SectionHeader
