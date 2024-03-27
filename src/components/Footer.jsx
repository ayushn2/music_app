"use client"
import Link from "next/link"
import Socials from "./Socials"
import Nav from "./Nav"
import Image from "next/image"

import {motion} from "framer-motion"
import { fadeIn } from "../../variants"

const Footer = () => {
  return (
    <footer className="bg-primary section h-[500px] xl:h-auto">
      <div className="container mx-auto h-full flex flex-col items-center gap-y-8">
        {/* email link */}
        <motion.div
        variants={fadeIn('up',0.4)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        >
          <Link href="#">
            <h2 className="text-[24px] lg:text-[38px] font-semibold leading-tight">
              iayush.n2@gmail.com
            </h2>
          </Link>
        </motion.div>
        {/* nav */}
        <motion.div
        variants={fadeIn('up',0.4)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        >
          <Nav 
          
          containerStyles='flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-x-8 text-sm uppercase font-semibold' 
          linkStyles='hover:text-primary/80 transition-all'/>
        </motion.div>
        {/* socials */}
        <motion.div
        variants={fadeIn('up',0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        >
          <Socials 
          containerStyles='flex text-[24px] gap-x-8' 
          iconStyles='hover:text-promary/80 transition-all justify-center' />
        </motion.div>
        {/* logo */}
        <motion.div
        variants={fadeIn('up',0.8)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.1}}
        className="my-0 py-0"
        >
          <Link href="#" className="relative w-[250px] h-[250px] flex transition-all">
            <Image src={'/assets/header/logo.svg'} 
            fill 
            className="object-contain" 
            alt='' />
          </Link>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
