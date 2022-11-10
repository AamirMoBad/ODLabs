
import { useCallback, useEffect, useRef } from "react";
import Video from "../video";

export default function MobileIntro({ visibility, setHome }) {
  const videoRef = useRef()

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setHome()
  }, [setHome])

  useEffect(() => {
    if (visibility) {
      videoRef.current.play()
    }
  }, [visibility])

  return (
      <>
        <div className='parent relative h-screen w-screen'>
          <Video
            ref={videoRef}
            src="/videos/mobile/mobile-intro"
            loop
            className="object-contain intro"
          />
        </div>
        <div className="left-0 top-0 absolute z-100">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 860 1528"
            className="object-cover h-screen w-screen z-10 opacity-10"
          >
            <image
              width="860"
              height="1528"
              xlinkHref="/images/mobile-intro-hidden.png"
              className='opacity-0'
            />
            <a href='javascript:void(0)' onClick={handleClick}>
              <rect
                x="558"
                y="300"
                fill="#fff"
                opacity="0"
                width="400"
                height="550"
              />
            </a>
          </svg>
        </div>
      </>
    );
}
