import { useEffect, useRef, useState } from "react";

export default function MobileHome({ visibility, setAbout }) {
    const [isIdle, setIsIdle] = useState(false)
    const startVideoRef = useRef()
    function handleClick(e) {
        e.preventDefault();
        setAbout()
      }

      function handleVideoEnded() {
        setIsIdle(true)
      }

      useEffect(() => {
        if (visibility) {
          setIsIdle(false)
          startVideoRef.current.play()
        } else {
          setIsIdle(false)
        }
      }, [visibility])
    
      return (
        <>
          <div className='parent relative h-screen w-screen'>
            <video
              src="/videos/mobile/mobile-trans-1.webm"
              ref={startVideoRef}
              muted
              playsInline
              className="object-contain"
              style={{ display: isIdle ? 'none' : 'block' }}
              onEnded={handleVideoEnded}
            />
            <video
              src="/videos/mobile/mobile-index-page.webm"
              muted
              loop
              autoPlay
              playsInline
              style={{ display: isIdle ? 'block' : 'none' }}
              className="object-contain"
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
        </>
      );
    }
