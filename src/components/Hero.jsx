"use client";

import Image from "next/image";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from "react-parallax-mouse"
import {motion} from "framer-motion"
import {TypeAnimation} from "react-type-animation"
import {motionn} from "framer-motion"
import {fadeIn} from "../../variants"

const locationSequence = [
    'Los Angeles, USA',
    3000,
    'Rio de Janeiro, Brazil',
    3000,
    'Paris, France',
    3000,
    'Berlin, Germany',
    3000,
    'Athens, Greece',
    3000,

]

const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-[850px] flex " id="home">
     
      <div className="container mx-auto h-full flex justify-center items-center xl:justify-start">
        {/* text */}
        <div className="flex flex-col md:items-center sm:items-center xl:items-start">
        <div className="h-full flex flex-col justify-center items-start xl:items-start z-20 pt-0">
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.2} resetOnLeave className="relative flex items-center h-[120px] xl:h-max xl:w-[840px]">
                <MouseParallaxChild 
                factorX={0.2} 
                factorY={0.4} 
                className="relative">
                    <motion.div 
                    variants={fadeIn('up',0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.3}}
                    className="w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]">
                        <Image src={'/assets/hero/typo-1.svg'}
                        fill
                        alt=''
                        className="object-contain" />
                    </motion.div>
                </MouseParallaxChild>
                <MouseParallaxChild 
                factorX={0.9} 
                factorY={0.9} 
                className="absolute xl:left-6 z-30">
                    <motion.div 
                    variants={fadeIn('up',0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.3}}
                    className="w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]">
                        <Image src={'/assets/hero/typo-2.svg'}
                        fill
                        alt=''
                        className="object-contain" />
                    </motion.div>
                </MouseParallaxChild>
                <MouseParallaxChild 
                factorX={0.3} 
                factorY={0.6} 
                className="hidden xl:flex absolute right-28 z-20 opacity-80">
                    <motion.div 
                    variants={fadeIn('left',1.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.3}}
                    className="w-[150px] h-[100px] xl:w-[168px] xl:h-[150px] mix-blend-luminosity">
                        <Image src={'/assets/hero/bird.png'}
                        fill
                        alt=''
                        className="object-contain" />
                    </motion.div>
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </div>
        {/* image */}
        
        <motion.div 
        variants={fadeIn('up',1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className="min-h-[60px] flex items-center justify-center mb-2 text-[18px]">
            <div className="hidden xl:flex items-center xl:gap-x-0">
                <div>World</div>
                <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                    <Image fill src={'/assets/hero/dot.svg'} alt=''/>
                </div>
                <div>Tour</div>
                
            </div>
            {/* icon */}
            <div className="hidden xl:flex items-center justify-center relative w-7 h-7 mx-4">
                <Image fill src={'/assets/hero/mic.svg'} alt=''/>
            </div>
            {/* animation */}
            <TypeAnimation
            sequence={locationSequence}
            speed={10}
            deletionSpeed={10}
            cursor={false}
            repeat={Infinity}
            />
        </motion.div>
        <motion.div
            variants={fadeIn('up',1.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className="flex justify-center items-center"
        >
            <button className="btn btn-lg btn-accent">
                Get Tickets
            </button>
        </motion.div>
</div>
        <motion.div
        variants={fadeIn('left',0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className="hidden xl:flex absolute right-0 top-0 before:w-[612px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10">
            <Image 
            src={'/assets/hero/singer.png'} 
            width={467} 
            height={753}
            alt=''
            quality={100}
            priority
            />
        </motion.div>
      </div>
      
    </section>
  )
}

export default Hero
