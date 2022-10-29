import { Fragment } from "react";
import Link from "next/link";
function About(props) {

  function homeClick(e) {
    e.preventDefault();
    console.log("clicked")
    props.setHome()
    console.log(props.visibility)
  }
  return (
   <Fragment>
    <video
        src={"/videos/about.mp4"}
        autoPlay
        muted
        loop
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
        <a href='javascript:void(0)' onClick={homeClick}>
    <rect x="-250" y="735" fill="#fff" opacity="0" width="433" height="273"></rect>
  </a>
      </svg>
</Fragment>
  )
}

export default About