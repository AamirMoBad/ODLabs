import React from 'react'
import { Fragment } from 'react'
import Link from "next/link";

function Home(props) {
  function hologramClick(e) {
    e.preventDefault();
    console.log("clicked")
    props.setHologram()
    console.log(props.visibility)
  }

  function aboutClick(e) {
    e.preventDefault();
    console.log("clicked")
    props.setAbout()
    console.log(props.visibility)
  }
  return (
    <Fragment>
          <video
            src={"/videos/transition-a.mp4"}
            autoPlay
            muted
            className="object-contain lg:object-cover h-screen w-screen absolute rotate-90 xl:rotate-0 z-0"
          />
         
         
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1920 1080"
            className="object-cover h-screen w-screen absolute z-10 opacity-0 rotate-90 lg:rotate-0"
          >
            <image
              width="1920"
              height="1080"
              xlinkHref="/images/transition-a-hidden.png"
              className='rotate-90 lg:rotate-0 opacity-0'
            ></image>
             <a href='javascript:void(0)' onClick={hologramClick}>
              <rect
                x="454"
                y="383"
                fill="fff"
                opacity="10"
                width="1062"
                height="490"
    
              >
              </rect>
            </a>
            <a href='javascript:void(0)' onClick={aboutClick}>
    <rect x="1680" y="160" fill="#fff" opacity="100" width="360" height="130"></rect>
  </a>
          </svg>
        
      </Fragment>
  )
}

export default Home