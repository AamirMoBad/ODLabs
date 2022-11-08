/**
 * Video utility functions
 */
export const videoAdapter = {
	stop(video) {
		video.pause()
		video.currentTime = 0;
	}
}
