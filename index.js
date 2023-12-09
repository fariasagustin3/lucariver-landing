document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('slider');
  const slides = slider.querySelector('div');
  let currentIndex = 0;

  function updateSlider() {
    const transformValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + transformValue + ')';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.children.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
    updateSlider();
  }

  setInterval(nextSlide, 3000); // Cambia el slide cada 3 segundos (ajusta según tus necesidades)
});