const navBarHeight = $(".navbar-fixed").innerHeight();
// $(".padding-top").css({
//   "padding-top": navBarHeight + "px",
// });

$(".menu-icon").on("click", function () {
    $(".menu-icon").toggleClass("active");
    $(".nav-main").toggleClass("open-menu");
    $("html, body").toggleClass('overflow-hidden');
});


// Video Model

function playVideo() {
  $(".media-videos").on("click", function () {
    var videosrc = $(this).attr("videosrc");
    // var empededLink = getId(videosrc);
    $(".videoModal").modal("show");

    $(".videoModal .video-src").attr("src", videosrc+"?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1&autoplay=1");
    // console.log("videosrc", videosrc);
  });

  $(".videoModal").on("hidden.bs.modal", function (e) {
    $(".videoModal .video-src").attr("src", "");
  });
}

if ($(".media-videos").length) {
  playVideo();
}


if ($(".hero").length) {
  let swiperHero = new Swiper(".hero-swiper", {
    // loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000,
    // },
    pagination: {
      el: ".hero-swiper .swiper-pagination",
      clickable: true,
    },
  });
}

  if ($(".scroll-btn")) {
    $(".scroll-btn").on("click", function (e) {
      $("body").removeClass("open-menu");
        $("html, body").animate(
          {
            scrollTop:
              $("#" + $(this).data("scroll")).offset().top,
          },
          1200
        );
    });
  }


  if ($(".marquee-swiper-brands-top").length) {
    let swiperMarqueeBrandsTop = new Swiper(".marquee-swiper-brands-top", {
      spaceBetween: 0,
      centeredSlides: true,
      speed: 8000,
      autoplay: {
        delay: 0,
        // reverseDirection: true,
      },
      loop: true,
      loopedSlides: 4,
      slidesPerView: 'auto',
      allowTouchMove: false,
      // breakpoints: {
      //   0: {
      //     spaceBetween: 20,
      //   },
      //   992: {
      //     spaceBetween: 30,
      //   },
      // },
    });
  }
  
  if ($(".marquee-swiper-brands-bottom").length) {
    let swiperMarqueeBrandsBottom = new Swiper(".marquee-swiper-brands-bottom", {
      spaceBetween: 0,
      centeredSlides: true,
      speed: 8000,
      autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      loop: true,
      loopedSlides: 4,
      slidesPerView: 'auto',
      allowTouchMove: false,
    });
  }

if ($("select").length) {
  $("select").selectpicker();
}


if ($(".section-team .swiper-team").length) {
  let swiperNewsPartnerships = new Swiper(".section-team .swiper-team", {
    spaceBetween: 20,
    // centeredSlides: true,
    // loop: true,
    speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
      },
      768: {
        slidesPerView: 2.4,
      },
      1024: {
        slidesPerView: 3.4,
      },
    },
    navigation: {
      nextEl: ".section-team .swiper-button-next",
      prevEl: ".section-team .swiper-button-prev",
    },
  });
}


// Scroll To Top
if ($(".backToTop").length) {
  $(".backToTop").click(function (e) {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1200
    );
  });
}

// Loader
setTimeout(() => {
  $(".loader").addClass("hidden");
  $(".hero").addClass("active");
}, 2000);


if ($(".swiper-services-info").length) {
  let swiperNewsPartnerships = new Swiper(".swiper-services-info", {
    spaceBetween: 15,
    speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000,
    // },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".services-info .swiper-button-next",
      prevEl: ".services-info .swiper-button-prev",
    },
  });
}


if ($(".marquee-swiper").length) {
  let swiperMarquee = new Swiper(".marquee-swiper", {
    centeredSlides: true,
    speed: 20000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
      0: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 30,
      },
    },
  });
}


if ($(".swiper-client-feedback").length) {
  let swipeClientFeedback = new Swiper(".swiper-client-feedback", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
      },
      768: {
        slidesPerView: 1.6,
      },
      1024: {
        slidesPerView: 1.8,
      },
    },
    navigation: {
      nextEl: ".client-feedback .swiper-button-next",
      prevEl: ".client-feedback .swiper-button-prev",
    },
  });
}

function initSwiperServices(i) {
  let swipeClientFeedback = new Swiper(".swiper-"+i+"", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
      },
      768: {
        slidesPerView: 1.6,
      },
      1024: {
        slidesPerView: 1.8,
      },
    },
    navigation: {
      nextEl: ".client-feedback-"+i+" .swiper-button-next",
      prevEl: ".client-feedback-"+i+" .swiper-button-prev",
    },
  });
}


if($('.services-work').length) {
  $('.client-feedback').each(function(index){
    initSwiperServices(index);
  });
}



