let Landing = {
	imgList: [
	],
	desktopImgList: [
		"http://i.imgur.com/MCqgnX6.jpg",
		"http://i.imgur.com/LPQtF0Y.jpg",
		"http://i.imgur.com/ZEX9H9t.jpg",
		"http://i.imgur.com/nRTAHdV.jpg",
		"http://i.imgur.com/iu255KD.jpg",
		"http://i.imgur.com/OYtmotC.jpg",
		"http://i.imgur.com/W1teSSB.jpg",
		"http://i.imgur.com/84Y0UKq.jpg",
		"http://i.imgur.com/7vC5rQc.jpg",
		"http://i.imgur.com/Zkbg1QB.jpg",
		"http://i.imgur.com/4q9xIjg.jpg",
		"http://i.imgur.com/VNCgJZr.jpg",
		"http://i.imgur.com/7MJ9ao3.jpg",
		"http://i.imgur.com/PPFYV3u.jpg",
		"http://i.imgur.com/GfGe0Bo.jpg"
	],
	mobileImgList: [
		"http://i.imgur.com/3ZR5QTGh.jpg"
	],
	initialize: () => {
		if ($(window).width() > 768) {
			Landing.imgList = Landing.desktopImgList;
			setInterval(() => {
				Landing.nextImg();
			}, 10000);
		} else {
			Landing.imgList = Landing.mobileImgList;
		}
		Landing.loadBgImg();
		Landing.loadEvents();
	},
	loadEvents: () => {
		document.onclick = () => {
			Landing.nextImg();
		};
		$('.profile').click(() => {
			$('.about').toggleClass('about-visible');
			$('.links').removeClass('links-visible');
		});
		$('.about-close-btn,.about').click(() => {
			$('.about').removeClass('about-visible');
			$('.links').addClass('links-visible');
		});
	},
	loadBgImg: () => {
		let bgImg = new Image();
		bgImg.onload = () => {
			let imgUrl = Landing.imgList[0];
			let bgImg = new Image();
			let bgUrl = "url('" + imgUrl + "')";
			$('.bg-image').css("background", bgUrl);
			$('.bg-image').addClass('show-image');
			$('.links').addClass('links-visible');
			$('.loader').removeClass('loader-visible');
		};
		bgImg.src = Landing.imgList[0];
	},
	nextImg: () => {
		let imgUrl = Landing.getRandomImg();
		let bgImg = new Image();
		let bgUrl = "url('" + imgUrl + "')";
		bgImg.onload = () => {
			$('.bg-image').css("background", bgUrl);
		};
		bgImg.src = imgUrl;
	},
	getRandomImg: () => {
		return Landing.imgList[~~(Math.random() * Landing.imgList.length)];

	}
}