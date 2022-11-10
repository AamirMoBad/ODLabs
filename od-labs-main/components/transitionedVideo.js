import { useCallback, useEffect, useRef, useState } from "react"
import { videoAdapter } from "../utils/videoAdapter"
import Video from "./video"

const TransitionedVideo = ({
	srcTransition,
	src,
	visible
}) => {
	const transitionRef = useRef()
	const videoRef = useRef()
	const [isTranstionProgress, setIsTransitionProgress] = useState(visible)
	
	const handleTransitionEnd = useCallback(() => {
		setIsTransitionProgress(false)
		videoRef.current.play()
	}, [])

	useEffect(() => {
		if (visible) {
			transitionRef.current.play()
			setIsTransitionProgress(true)
		} else {
		  videoAdapter.stop(transitionRef.current)
		  setIsTransitionProgress(true)
		}
	  }, [visible])

	return (
		<div className='parent relative z-0 h-screen w-screen'>
			<Video
				src={srcTransition}
				ref={transitionRef}
				style={{ zIndex: isTranstionProgress ? (visible ? 50 : 0) : 0 }}
				onEnded={handleTransitionEnd}
			/>
			<Video
				src={src}
				ref={videoRef}
				loop
				style={{ zIndex: isTranstionProgress ? 0 : (visible ? 50 : 0) }}
			/>
		</div>
	)
}

export default TransitionedVideo