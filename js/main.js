(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    // Add animation to make items subtly move in an idle state
    $(".slider-carousel").owlCarousel({
        loop: true,
        margin: 25,
        items: 5,
        autoplay: true,
        smartSpeed: 600,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        pullDrag: true,
        rewind: true,
        responsive: {
            0: {
                items: 3
            },
            280: {
                items: 3
            },
            426: {
                items: 4
            },
            590: {
                items: 5
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            },
            1120: {
                items: 7
            },
            1710: {
                items: 10
            },
            1300: {
                items: 9
            },
            1900:{
                items:11
            }
        },
        onInitialized: function() {
            // Add animated class on initialization
            $(".owl-item").addClass("animated");
        },
        onDrag: function() {
            // Remove animation during drag
            $(".owl-item").addClass("animated");
        },
        onDragged: function() {
            // Re-add animation after drag
            $(".owl-item").addClass("animated");
        }
    });

    $(".slider-carousel").onmouseenter( function() {
        $(".owl-item").addClass("animated");
    });
    
    // Optional: If you want to stop animation on mouseleave
    $(".slider-carousel").onmouseleave( function() {
        $(".owl-item").addClass("animated");
    });
    $(".slider-carousel").onclick( function() {
        $(".owl-item").addClass("animated");
    });
    $(".slider-carousel").onmouseout( function() {
        $(".owl-item").addClass("animated");
    });
    
    $(".slider-carousel").onmousemove( function() {
        $(".owl-item").addClass("animated");
    });

    window.addEventListener('wheel', function(event) {
        if (event.ctrlKey) {
          event.preventDefault();
        }
      }, { passive: false });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    
    function updateNavbar() {
        if (window.scrollY > 0) {
            navbar.style.background = "#ffffff"; // Set your desired color
            navbar.style.transition = "background-color 0.3s"; // Smooth transition
        } else {
            navbar.style.background = "transparent";
        }
    }
    
    // Check scroll position on page load
    updateNavbar();

    // Update navbar on scroll
    window.addEventListener("scroll", updateNavbar);
});
function scrollTestimonials(direction) {
  const container = document.querySelector('.testimonial-content');
  const scrollAmount = 100; // Adjust scroll amount as needed
  container.scrollBy({
    top: direction * scrollAmount,
    behavior: 'smooth',
  });
}
window.onload = () => {
    setTimeout(() => {
      document.body.style.opacity = 1; // Make the body visible after 3 seconds
    }, 3000); // Wait for 3 seconds (3000 milliseconds)
  };
  
  // Initially hide the body (or main content) until everything is loaded
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.5s ease";

  function navigateTo(category) {
    window.location.href = `products.html#${category}`;
}
