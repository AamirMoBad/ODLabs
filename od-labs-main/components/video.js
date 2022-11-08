/* eslint-disable react/display-name */
import React from "react"

const Video = React.forwardRef(({
	src,
	...rest
}, ref) => (
		<video
			ref={ref}
			muted
			autoPlay
			preload="auto"
			playsInline
			className="object-contain"
			{...rest}
		>
			<source src={`${src}.webm`} type="video/webm" />
  			<source src={`${src}.mp4`} type="video/mp4" />
		</video>
	))

export default Video