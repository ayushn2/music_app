"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect,useState } from "react"

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

//components
import NavMobile from './NavMobile'
import Nav from './Nav'
import MenuBtn from './MenuBtn'
import Socials from './Socials'

const Header = () => {

  const [active,setActive] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      //detect scroll
      setActive(window.scrollY > 100);
    }
  
  window.addEventListener('scroll',handleScroll)

  return ()=>{
    window.removeEventListener('scroll',handleScroll);
  }
},[])
  return (
    <header className={`fixed z-50 w-full transition-all ${
      active?
      'bg-[#030315] py-6 ' 
      : 'bg-transparent py-8 '}`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        <Link href={'#'} className='relative flex w-[226px] h-[37.64px] transition-all mb-4 lg:mb-0'>
          <Image src={'/assets/header/logo.svg'} fill priority alt=''/>
        </Link>
        {/* nav */}
        <Nav containerStyles='hidden lg:flex items-center gap-x-8'/>
        {/* nav mobile*/}
        
        <NavMobile/>
        {/* menu btn */}
        <div className='absolute right-7 top-9 z-10 lg:hidden'>
          <MenuBtn/>
        </div>
        
        {/* social icons */}
        <Socials containerStyles='flex text-[24px] gap-x-4' iconStyles='hover:text-[#7f1cfc] transition-all'/>
      </div>
    </header>
  )
}

export default Header
