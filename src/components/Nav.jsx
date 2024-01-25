import React from 'react'
import {Link} from 'react-scroll'
import { useMediaQuery } from 'react-responsive'


const links=[{
    path:'home',
    name:'Home'
},
{
    path:'tours',
    name:'Tours'
},
{
    path:'discography',
    name:'Discography'
},
{
  path:'blog',
  name:'Blog'
},
{
    path:'contact',
    name:'Contact'
},
]
const Nav = ({containerStyles,linkStyles}) => {
    const isDesktop = useMediaQuery({
      query:'(min-width:1310px)'
    })
    
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link,index)=>{
        return (
            
        <Link 
        to={link.path}
        className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
        key={index}
        smooth={!isDesktop?false:true}
        spy
        offset={-50}
        activeClass='active'
        >
            {link.name}
        </Link>
        )
      })}
      
    </nav>
  )
}

export default Nav
