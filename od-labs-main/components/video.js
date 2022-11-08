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
			preload="none"
			src={`${src}.mp4#t=0.001`}
			playsInline
			className="object-contain"
			autobuffer
			{...rest}
			style={{ background: 'white', ...rest.style }} // setting backgound: white - bug on ios safari
		>
  			<source src={`${src}.mp4#t=0.001`} type="video/mp4" />
			<source src={`${src}.webm`} type="video/webm" />
		</video>
	))

export default Video