import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Video from './video';



export default function Intro(props) {
  function handleClick(e) {
    e.preventDefault();
    props.setHome()
  }

  return (
    <div className='parent relative h-screen w-screen'>
      <Fragment>
          <Video
            src={"/videos/home"}
            loop
            className="object-contain lg:object-cover h-screen w-screen absolute rotate-90 xl:rotate-0"
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
              xlinkHref="/images/home-hidden.png"
              className='rotate-90 lg:rotate-0'
            ></image>
           <a href='javascript:void(0)' onClick={handleClick}>
              <rect
                x="516"
                y="437"
                fill="#fff"
                opacity="0"
                width="393"
                height="243"
              ></rect>
            </a>
          </svg>
        
      </Fragment>

    </div>
  );
}
