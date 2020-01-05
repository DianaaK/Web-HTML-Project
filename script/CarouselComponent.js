(function() {
    let slides = document.getElementsByClassName("slide");
    let currentSlide = 0;
    let slideInterval;

    function startInterval() {
        slideInterval = setInterval(nextSlide, 4000);
    };

    function stopInterval() {
        clearInterval(slideInterval);
    }

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }

    let slideContainer = document.getElementById('slider');
    slideContainer.addEventListener("mouseover", stopInterval);
    slideContainer.addEventListener("mouseout", startInterval);

    startInterval();
})();