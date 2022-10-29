import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';



export default function Intro(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log("clicked")
    props.setHome()
    console.log(props.visibility)
  }



  return (
    <div className='parent relative h-screen w-screen'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Home of OD Labs" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
   
    <meta property="og:title" content="OD Labs" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.od-labs.netlify.app" />
    <meta property="og:image" content="/" />
    <meta name="twitter:title" content="OD Labs" />
    <meta name="twitter:description" content="Home of OD Lab" />
    <meta name="twitter:image" content="/" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:title" content="Home of OD Labs" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Home of OD Labs" />
    <meta property="og:image" content="/" />
    <meta property="og:url" content="https://www.od-labs.netlify.app" />
    </Head>

    <Fragment>
          <video
            src={"/videos/home.mp4"}
            autoPlay
            loop
            muted
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
