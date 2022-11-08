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
		<div className='parent relative h-screen w-screen'>
			<Video
				src={srcTransition}
				ref={transitionRef}
				style={{ display: isTranstionProgress ? 'block' : 'none' }}
				onEnded={handleTransitionEnd}
			/>
			<Video
				src={src}
				ref={videoRef}
				loop
				style={{ display: isTranstionProgress ? 'none' : 'block' }}
			/>
		</div>
	)
}

export default TransitionedVideo