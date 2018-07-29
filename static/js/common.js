/* eslint-disable */
$(document).ready(function () {

    $("#my-menu").mmenu({
        "extensions": [
            "pagedim-black",
            "fx-menu-slide",
            "fx-panels-slide-100",
            "fx-listitems-slide"
        ],
        "navbar": {
            "title": '<img src="/static/img/logo-1.svg">'
        },
        "navbars": [{
            "position": "bottom",
            "content": ["<p>© 2018 WH-CLUB.RU — It's only TEST server, all right belong to Ncsoft.</p>"]
        }],
        "dropdown": true
    }, {
        transitionDuration: 10
    });


    new WOW().init();

    var api = $("#my-menu").data("mmenu");
    var btn = $(".hamburger");

    api.bind("open:finish", function () {
        btn.addClass('is-active');
    });

    api.bind("close:finish", function () {
        btn.removeClass('is-active');
    });

    $(".carousel-services").on("initialized.owl.carousel", function () {
        setTimeout(function () {
            carouselService()
        }, 100);
    });

    $(".carousel-services").owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"],
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }

    }).on("changed.owl.carousel", function () {
        carouselService();
    });

    function carouselService() {
        $(".carousel-services .carousel-services-item").each(function () {
            var ths = $(this);
            var thsh = ths.find(".corousel-services-content").outerHeight();
            ths.find(".carousel-services-image").css("min-height", thsh);
        });
    }
    carouselService();

    $(".carousel-services-composition .h3").each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, "<span>$1</span>"));
    });


    $("select").selectize({
        create: true,
        onDropdownOpen: function () {
            $(".wrapper-select .label-box label").addClass("select-focus");
            $(".wrapper-select .label-box").addClass("focus");
            $(".wrapper-select").addClass("active-drop");
        },
        onDropdownClose: function () {
            if (!($(".selectize-control .selectize-input").hasClass("has-items"))) {
                $(".wrapper-select .label-box label").removeClass("select-focus");
                $(".wrapper-select .label-box").removeClass("focus");
                $(".wrapper-select").removeClass("active-drop");
            } else {
                $(".wrapper-select .label-box").removeClass("focus");
                $(".wrapper-select").removeClass("active-drop");
            }
        }
    });

    $(".stat-carousel").owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        autoHeight: true
    });

    $(".streams").owlCarousel({
        loop: true,
        items: 4,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $(".top").addClass("active");
        } else {
            $(".top").removeClass("active");
        }
    });

    $(".top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, "slow", "swing");
    });

    tippy(".progress", {
        html: '#myTooltip',
        delay: 100,
        duration: 600,
        animation: 'scale',
        theme: 'honeybee',
      });

});


$(window).on("load", function () {
    $(".preloader").delay(1000).fadeOut("slow");
});

$(window).scroll(function(e){
    parallax();
  });

  function parallax(){
    scrollPos = $(this).scrollTop();
	$('.site-header').css({
		'background-position-y' : (-scrollPos/5)+"px"
    });

    $('.flex-center').css({
		'transform' : 'translateY(' + (-scrollPos/3)+"px",
		'opacity': 1-(scrollPos/700)
    });
  }
// $(window).scroll(function () {
//     window.requestAnimationFrame(function(){
//         var scr = $(this).scrollTop();
//         $(".flex-center").css("transform", "translateY(-" + scr / 6 + "px");
//         $(".site-header").css("background-position-y", scr / 1.2);
//     });
// });

/*
$(window).on("load", function(){
    setInterval(function() {
        if($(".is-home .site-header").hasClass("firstBg")){
            $(".is-home .site-header").removeClass("firstBg").addClass("secondBg");
        }
        else if($(".is-home .site-header").hasClass("secondBg")){
            $(".is-home .site-header").removeClass("secondBg").addClass("firstBg");
        }
        else {
            $(".is-home .site-header").addClass("firstBg");
        }
  }, 10000);

});
*/
