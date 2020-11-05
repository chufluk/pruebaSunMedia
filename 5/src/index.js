const target = document.getElementById('sunmedia');
/**
 *
 * @param {string} src The video media file url
 * @return {HTMLVideoElement}
 */
/**
 * @param {HTMLDivElement} targetElm
 * @param {HTMLVideoElement} videoElm
 */ 

// onInsertVideoWhenTargetIsVisible(target, videoElm);

const videlem = document.createElement("video");

function createVideoElement(src) {
	videlem.id = "SUNVIDEO"
	videlem.type = "video/mp4";
	videlem.src = src;
	videlem.height = '400';
	videlem.width = '400';
	videlem.autoplay = true;
}

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top <= window.innerHeight
  );
};

function onInsertVideoWhenTargetIsVisible(target, videoElm){
	target.appendChild(videlem);
}

window.addEventListener('scroll', function (event) {
	if (isInViewport(target) && document.getElementById('SUNVIDEO') == null ) {
		let videoElm = createVideoElement('https://vod.addevweb.com/sunmedia/demos/v/normal.mp4');
		onInsertVideoWhenTargetIsVisible(target, videoElm);
	}
}, false);

videlem.onended = function() {
  videlem.remove();
};