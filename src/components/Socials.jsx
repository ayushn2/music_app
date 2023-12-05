import Link from 'next/link'
import { RiInstagramFill,RiSpotifyFill,RiSoundcloudFill, RiYoutubeFill } from 'react-icons/ri'
const socials =[
    {
        path:"#",
        icon:<RiYoutubeFill/>,
    },
    {
        path:"#",
        icon:<RiInstagramFill/>,
    },
    {
        path:"#",
        icon:<RiSpotifyFill/>,
    },
    {
        path:"#",
        icon:<RiSoundcloudFill/>,
    },

]

const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item,index)=>{
        return (
                <Link href={"#"} key={index}>
            
            
                    <div className={`${iconStyles}`}>
                    {item.icon}
                    </div>
            
                </Link>
        )
        
      })}
    </div>
  )
}

export default Socials
