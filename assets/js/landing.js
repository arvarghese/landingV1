var Landing = {
    imgList: [],
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
    initialize: function () {
        if ($(window).width() > 768) {
            Landing.imgList = Landing.desktopImgList;
            setInterval(function () {
                Landing.nextImg();
            }, 10000);
        }
        else {
            Landing.imgList = Landing.mobileImgList;
        }
        Landing.loadBgImg();
        Landing.loadEvents();
    },
    loadEvents: function () {
        document.onclick = function () {
            Landing.nextImg();
        };
        $('.profile').click(function () {
            $('.about').toggleClass('about-visible');
            $('.links').removeClass('links-visible');
        });
        $('.about-close-btn,.about').click(function () {
            $('.about').removeClass('about-visible');
            $('.links').addClass('links-visible');
        });
    },
    loadBgImg: function () {
        var bgImg = new Image();
        bgImg.onload = function () {
            var imgUrl = Landing.imgList[0];
            var bgImg = new Image();
            var bgUrl = "url('" + imgUrl + "')";
            $('.bg-image').css("background", bgUrl);
            $('.bg-image').addClass('show-image');
            $('.links').addClass('links-visible');
            $('.loader').removeClass('loader-visible');
        };
        bgImg.src = Landing.imgList[0];
    },
    nextImg: function () {
        var imgUrl = Landing.getRandomImg();
        var bgImg = new Image();
        var bgUrl = "url('" + imgUrl + "')";
        bgImg.onload = function () {
            $('.bg-image').css("background", bgUrl);
        };
        bgImg.src = imgUrl;
    },
    getRandomImg: function () {
        return Landing.imgList[~~(Math.random() * Landing.imgList.length)];
    }
};
