
    var slideIndex = 0;

    function moveSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var slides = document.getElementsByClassName("slide");
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    // Auto slide functionality
    setInterval(function () {
        moveSlide(1);
    }, 3000); // Change slides every 3 seconds

    // Initial call to display the first slide
    showSlides(slideIndex);
