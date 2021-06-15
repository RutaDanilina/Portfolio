"use strict";

// navbar
$(window).scroll(function () {
  if ($(document).scrollTop() > 30) {
    $("nav").addClass("shrink");
  } else {
    $("nav").removeClass("shrink");
  }
});

//grazus nuvaziavimas iki section
document
  .querySelector(".navbar-nav")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav_link")) {
      const id = e.target.getAttribute("href");
      document
        .querySelector(id)
        .scrollIntoView({ behavior: "smooth" });
    }
  });

///////////////////////////////////
// Slideris
const slider = function () {
  const slides =
    document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(
    ".slider__btn--left"
  );
  const btnRight = document.querySelector(
    ".slider__btn--right"
  );

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) =>
        (s.style.transform = `translateX(${
          100 * (i - slide)
        }%)`)
    );
  };

  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "ArrowLeft") prevSlide();
      e.key === "ArrowRight" && nextSlide();
    }
  );
};
slider();

//uzdeti dialogus github ir email

jQuery(document).ready(function () {
  jQuery(".send-img").hide();
});
jQuery(document).ready(function () {
  jQuery(" .i-mail-pic").hover(
    function () {
      jQuery(".send-img").show();
    },
    function () {
      jQuery(".send-img").hide();
    }
  );
});

$(document).ready(function () {
  $(".visit-img").hide();
});
$(document).ready(function () {
  $(" .i-git-pic").hover(
    function () {
      $(".visit-img").show();
    },
    function () {
      $(".visit-img").hide();
    }
  );
});
