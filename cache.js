




//not sure bn if prefetch or preload is better but this works
(function() {

	let sliderBanners = [
		'assets/images/slide banner/1.jpeg',
		'assets/images/slide banner/2.jpeg',
		'assets/images/slide banner/3.jpeg',
		'assets/images/slide banner/4.jpeg',
		'assets/images/slide banner/5.jpeg',
		'assets/images/slide banner/6.jpeg'
	];

	let otherImages = [

		'assets/images/logo-transparent.png',
		'assets/images/logo-transparent-white.png',
		'assets/images/logo.jpeg',
		'assets/images/default-avatar.jpeg',
		'assets/images/icons/favicon.png',
		'assets/images/cards/Image 1.jpeg',
		'assets/images/cards/Image 2.jpeg',
		'assets/images/cards/Image 3.jpeg',
		'assets/images/cards/Image 4.jpeg',
		'assets/images/company icons/AIA.png',
		'assets/images/company icons/OREL IT.png',
		'assets/images/company icons/MAS.png',
		'assets/images/company icons/Brandix.avif',
		'assets/images/company icons/Cinnamon.png',
		'assets/images/company icons/Keels.png',
		'assets/images/company icons/Emerald.png',
		'assets/images/company icons/SLT.png'
	];

	function preloadImage(src) {

		let img = new Image();
		img.src = src;
	}

	function injectPrefetch(src) {

		let link = document.createElement('link');
		link.rel = 'prefetch';
		link.href = src;
		link.as = 'image';
		document.head.appendChild(link);
	}

	sliderBanners.forEach(function(src) {

		injectPrefetch(src);
		preloadImage(src);
	});

	setTimeout(function() {
		
		otherImages.forEach(function(src) {
			preloadImage(src);
		});
	}, 500);

})();
