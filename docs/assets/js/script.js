const elementsWAnim = document.querySelectorAll('._elem-anim');

if(window.innerWidth>910){

if (elementsWAnim.length > 0) { 

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
			scrollTop = window.pageYOffset || document.documentElement.scrollTop
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft
		}
	}

	const animOnScroll = () => {
		for (let index=0; index < elementsWAnim.length; index++){
			const elementWanim = elementsWAnim[index];
			const elementWanimHeight = elementWanim.offsetHeight;
			const elementWanimOffsetTop = offset(elementWanim).top;
			const animStart = 4;

			let elementWanimPoint = window.innerHeight - elementWanimHeight / animStart;

			if (elementWanimHeight > window.innerHeight) {
				elementWanimPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((window.pageYOffset > elementWanimOffsetTop - elementWanimPoint) && (window.pageYOffset < (elementWanimOffsetTop + elementWanimHeight))) {
				elementWanim.classList.add('_active')
			} else {
				if (!elementWanim.classList.contains('_elem-anim-no-repeat')) {
					elementWanim.classList.remove('_active');
				}
				
			}
		}
	}

	window.addEventListener('scroll', animOnScroll);
	window.addEventListener('load', animOnScroll())
	}
} else {
	for (let index = 0; index < elementsWAnim.length; index++) {
		const elementWanim = elementsWAnim[index];
		elementWanim.classList.add('_active')
		}
	}
