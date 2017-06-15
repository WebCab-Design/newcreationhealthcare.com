
document.addEventListener('DOMContentLoaded', function () {
	var connectWrap = document.querySelector('.connect-wrap');

	if (connectWrap) {
		var position = connectWrap.offsetTop;

		document.addEventListener('scroll', function () {
			if (window.pageYOffset > position && !connectWrap.classList.contains('active')) {
				window.requestAnimationFrame(function () {
					connectWrap.classList.add('active');
				});
			} else if (window.pageYOffset < position && connectWrap.classList.contains('active')) {
				window.requestAnimationFrame(function () {
					connectWrap.classList.remove('active');
				});
			}
		});

	}

});
