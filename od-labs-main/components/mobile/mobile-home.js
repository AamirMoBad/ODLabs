import { Fragment, useRef, useState } from "react";

export default function MobileHome(props) {
  console.log("rerender")
    const [videoSrc, setVideoSrc] = useState("/videos/mobile/mobile-trans-1.mp4")
    const vidRef = useRef()
    function handleClick(e) {
        e.preventDefault();
        props.setAbout()
        console.log(props.visibility)
      }
      function handleVideoEnded() {
        vidRef.current.loop = false;
        setVideoSrc("/videos/mobile/mobile-index-page.mp4")
        vidRef.current.loop = true;

      }
    
      return (
          <Fragment>
        <div className='parent relative h-screen w-screen'>
      
        
              <video
              ref= {vidRef}
                src={videoSrc}
                muted
                autoPlay
                autoBuffer
                playsInline
                className="object-contain"
                onEnded={handleVideoEnded}
              />
              </div>
              <div className="left-0 top-0 absolute">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 860 1528"
                className="object-cover h-screen w-screen  z-10 opacity-10 "
              >
                <image
                  width="860"
                  height="1528"
                  xlinkHref="/images/mobile-intro-hidden.png"
                  className='opacity-0'
                ></image>
               <a href='javascript:void(0)' onClick={handleClick}>
                  <rect
                    x="10"
                    y="300"
                    fill="#fff"
                    opacity="0"
                    width="400"
                    height="600"
                  ></rect>
                </a>
              </svg>
              </div>
            
         
    
        
        </Fragment>
      );
    }
