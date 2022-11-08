import { useCallback } from "react";
import TransitionedVideo from "../transitionedVideo";

export default function MobileAbout({ visibility, setIntro }) {
    const handleClick = useCallback((e) => {
      e.preventDefault();
      setIntro()
    }, [setIntro])
    
    return (
      <>
          <TransitionedVideo
            srcTransition="/videos/mobile/mobile-trans-2"
            src="/videos/mobile/mobile-about"
            visible={visibility}
          />
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
                    height="900"
                  ></rect>
                </a>
              </svg>
              </div>
        </>
      );
    }
