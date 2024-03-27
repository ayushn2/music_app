"use client"

import { useState,useEffect } from "react"

import useSWR from "swr"
import Image from "next/image"

import { AudioPlayer } from "react-audio-play"

import {Swiper,SwiperSlide,useSwiperSlide} from "swiper/react"
import {EffectCoverflow,FreeMode,Navigation,Thumbs} from "swiper/modules"
import { data } from "../../../data"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const fetcher = (url)=>fetch(url).then((res)=>res.json())

const AlbumSlider = () => {

  const [thumbsSwiper,setThumbsSwiper] = useState(null)


    const albums = data.albums;
  
  return (
    <>
      <Swiper 
      effect={"coverflow"}
      speed={1000} 
      spaceBetween={80}
      allowTouchMove={true}
      thumbs={{
        swiper:thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
    }}
      modules={[FreeMode,Navigation,Thumbs,EffectCoverflow]}
      coverflowEffect={{
        rotate:50,
        stretch:0,
        depth:100,
        modifier:1,
        slideShadows:true,
      }}
      className="album-slider">
        {albums.map((album)=>{
            
            return (
                <SwiperSlide key={album.id} className="mb-12">
                    <div className="w-full bg-[#151538]/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
                        {/* img */}
                        <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                            <Image src={album.img} fill priority alt='' className="object-contain" />
                        </div>
                        {/* track container */}
                        <div className="flex flex-1 w-full h-[500px]">
                            {/* tracks */}
                            <div className="flex-1 flex flex-col">
                                {album.tracks?.map((track,index)=>{
                                    return (
                                    <div className="flex flex-1 w-full h-[500px]" key={index}>
                                        {/* track name */}
                                        <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold">
                                            <div className="text-[#7f1cfc] text-sm xl:text-lg">0{index +1}.</div>
                                            <div className="text-sm xl:text-base">{track.name}</div>
                                        </div>
                                        
                                        {/* player */}
                                        <div>
                                            <AudioPlayer 
                                            style={{
                                                background:'transparent',
                                                boxShadow:'none',
                                                width:"100%",
                                                }}
                                            src={track.src}
                                            loop
                                            preload="none"
                                            color="#fff"    
                                            volume={40}
                                            volumePlacement="bottom"
                                            className="album-player"
                                            />
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>
            ) 
            
        })}
      </Swiper>
      
      <Swiper 
      onSwiper={setThumbsSwiper}
      modules={[FreeMode,Navigation,Thumbs]}
      breakpoints={{
        320:{
            slidesPerView:2,
            spaceBetween:10,
        },
        425:{
            slidesPerView:2,
            spaceBetween:30,
        },
        768:{
            slidesPerView:3,
            spaceBetween:30,
        },
        1024:{
            slidesPerView:4,
            spaceBetween:30,
        },
        1310:{
            slidesPerView:5,
            spaceBetween:30,
        }
      }}
      spaceBetween={20}
      slidesPerView={5}
      freeMode={true}
      watchSlidesProgress={true}
      className="thumb-slider"
      >
        {albums?.map((thumb,index)=>{
            return (
            <SwiperSlide key={index} className="relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]">
                <div className="relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px] cursor-pointer">
                    <Image 
                    src={thumb.img} 
                    fill 
                    priority 
                    className="object-contain group-hover:scale-105 transition-all duration-300"/>
                </div>
            </SwiperSlide>
            )
            
        })}
      </Swiper>
    </>
  )
}

export default AlbumSlider
