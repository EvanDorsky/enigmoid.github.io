// Generated by CoffeeScript 1.8.0
(function() {
	var banner, bannerImg, isBannerClosed, setTransition, sizeBanner;

	bannerImg = $("#post-banner");

	banner = $("div.post.banner");

	isBannerClosed = true;


	/*
	Size the banner before the image has loaded
	Because it doesn't depend on the image size
	And it's jarring if this doesn't happen
	 */

	banner.css({
		"height": banner.width() / 5
	});

	$(bannerImg).load(function() {
		return sizeBanner($(this), true);
	});

	$(window).resize(function() {
		return sizeBanner(bannerImg, isBannerClosed);
	});

	banner.click(function() {
		var elsProps = {
			banner: {
				el: banner,
				prop: "height"
			},
			bannerImg: {
				el: bannerImg,
				prop: "margin-top"
			}
		}
		setTransition(true, elsProps);
		setTimeout((function() {
		setTransition(false, elsProps);
		}), 200);
		if (isBannerClosed) {
			banner.css({
				"height": bannerImg.height()
			});
			bannerImg.css({
				"margin-top": 0
			});
			banner.find(".banner-content").css({
				"opacity": 0
			});
		} else {
			sizeBanner(bannerImg, true);
			banner.find(".banner-content").css({
				"opacity": 1
			});
		}
		return isBannerClosed = !isBannerClosed;
	});

	sizeBanner = function(b, closed) {
		var bannerPosition, h;
		h = b.height();
		bannerPosition = banner.attr("bannerPosition");
		if (closed) {
			banner.css({
				"height": banner.width() / 5
			});
			b.css({
				"margin-top": -bannerPosition * h
			});
		} else {
			banner.css({
				"height": bannerImg.height()
			});
		}
	};

	// elsProps is a dict {elementName: {el: el, prop: property}}
	setTransition = function(enable, elsProps) {
		for (var name in elsProps) {
			var entry = elsProps[name]
			if (enable) {
				$(entry.el).css({
					"-webkit-transition": entry.prop + " 200ms",
					"   -moz-transition": entry.prop + " 200ms",
					"    -ms-transition": entry.prop + " 200ms",
					"     -o-transition": entry.prop + " 200ms",
					"        transition": entry.prop + " 200ms"
				})
			}
			else {
				$(entry.el).css({
					"-webkit-transition": "none",
					"   -moz-transition": "none",
					"    -ms-transition": "none",
					"     -o-transition": "none",
					"        transition": "none"
				})
			}
		}
	};

})()
