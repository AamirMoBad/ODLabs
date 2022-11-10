import Head from 'next/head'
import Intro from '../components/intro';
import { useState, useEffect } from 'react';
import Home from '../components/home';
import Hologram from '../components/hologram';
import About from '../components/about';
import MobileIntro from '../components/mobile/mobile-intro.js'
import MobileHome from '../components/mobile/mobile-home';
import MobileAbout from '../components/mobile/mobile-about';

export default function Index() {
  const [visibility, setVisibility] = useState({
    intro: true,
    home: false,
    hologram: false,
    about: false
  })

  function setHome() {
    setVisibility({
      intro: false,
      home: true,
      hologram: false,
      about: false
    })
  }

  function setIntro() {
    setVisibility({
      intro: true,
      home: false,
      hologram: false,
      about: false
    })
  }

  useEffect(()=>{
    setVisibility({
      intro: true,
      home: false,
      hologram: false,
      about: false
    })
  },[])

  function setHologram() {
    setVisibility({
      intro: false,
      home: false,
      hologram: true,
      about: false
    })
  }

  function setAbout() {
    setVisibility({
      intro: false,
      home: false,
      hologram: false,
      about: true
    })
  }

  return (
    <div className='parent relative h-screen w-screen'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Home of OD Labs" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
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

      {/* <div className='desktop-site'>
        <div className={visibility.intro ? 'absolute z-10' : 'absolute z-0'}>
          <Intro 
            setHome = {setHome}
            visibility = {visibility}
          />
        </div>

        <div className={visibility.home ? 'absolute z-10' : 'absolute z-0'}>
          <Home 
            setHologram = {setHologram}
            setAbout = {setAbout}
            visibility = {visibility}
          />
        </div>

        <div className={visibility.hologram ? 'absolute z-10' : 'absolute z-0'}>
          <Hologram 
            setAbout = {setAbout}
            visibility = {visibility}
          />
        </div>

        <div className={visibility.about ? 'absolute z-10' : 'absolute z-0'}>
          <About 
            setHome = {setHome}
            visibility = {visibility}
          />
          </div>
        </div> */}
      {/* Desktop site ended */}

      <div className='mobile-site md:hidden'>
        <div className={visibility.intro ? 'absolute z-100' : 'absolute -z-10'}>
          <MobileIntro 
            setHome={setHome}
            visibility={visibility.intro}
          />
        </div>
        <div className={visibility.home ? 'absolute z-100' : 'absolute -z-10'}>
          <MobileHome 
          setAbout={setAbout} 
          visibility={visibility.home}
          />
        </div>

        <div className={visibility.about ? 'absolute z-100' : 'absolute -z-10'}>
          <MobileAbout 
          setIntro = {setIntro} 
          visibility={visibility.about}
          />
        </div>
      </div>
    </div>
  );
}
