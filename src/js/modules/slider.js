export const slider = function () {
  const sliderContainer = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Создание точек навигации
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  goToSlide(curSlide);
  createDots();
  activateDot(curSlide);

  // Перетаскивание слайдов
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = function (e) {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = function (e) {
    touchEndX = e.changedTouches[0].clientX;
    handleGesture();
  };
  const handleTouchMove = function (e) {
    e.preventDefault();
  };

  const handleGesture = function () {
    if (touchEndX < touchStartX) {
      nextSlide();
    } else if (touchEndX > touchStartX) {
      prevSlide();
    }
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  sliderContainer.addEventListener("touchstart", handleTouchStart, false);
  sliderContainer.addEventListener("touchend", handleTouchEnd, false);
  sliderContainer.addEventListener("touchmove", handleTouchMove, false);
};
