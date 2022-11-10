export const VISIBILITY_MECHANISMS = {
	ZINDEX: 1, // Z-INDEX is used as a hack for showing/hiding videos on Safari for Iphone IOS 16. Otherwise there is a flicker
	DISPLAY: 2
}

const VisibilityContainer = ({ visible, children, mechanism = VISIBILITY_MECHANISMS.DISPLAY }) => {
	let className = ''

	if (mechanism === VISIBILITY_MECHANISMS.DISPLAY) {
		if (!visible) className += ' hidden'
	} else if (mechanism === VISIBILITY_MECHANISMS.ZINDEX) {
		if (visible) className += 'absolute z-100'
		else className += 'absolute -z-10'
	}

	return (
		<div className={className}>
			{children}
		</div>
	)
}

export default VisibilityContainer
