import TransitionedVideo from "../transitionedVideo";

export default function MobileHome({ visibility, setAbout }) {
    function handleClick(e) {
        e.preventDefault();
        setAbout()
      }

      return (
        <>
          <div className='parent relative h-screen w-screen'>
            <TransitionedVideo
              srcTransition="/videos/mobile/mobile-trans-1"
              src="/videos/mobile/mobile-index-page"
              visible={visibility}
            />
            </div>
            <div className="left-0 top-0 absolute z-100">
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
