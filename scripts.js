gsap.to("#parallax-background", {
  yPercent: 0,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#hero-title", {
  opacity: 0,
  y: 30,
  duration: 1.5,
  ease: "power4.out",
});

gsap.from("#hero-subtitle", {
  opacity: 0,
  y: 30,
  delay: 0.5,
  duration: 1.5,
  ease: "power4.out",
});

// Слайд для мобильных устройств
document.addEventListener("DOMContentLoaded", function () {
  let myCarousel = document.querySelector("#experienceCarousel");
  let carousel = new bootstrap.Carousel(myCarousel, {
    // interval: 5000, // Автопрокрутка каждые 5 секунд
    wrap: true, // Возврат к первому слайду после последнего
  });
});
