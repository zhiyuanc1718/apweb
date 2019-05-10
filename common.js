$(function() {

    function show() {
        if ($(window).scrollTop()) {
            $(".navbar").addClass('bg-light')
            if ($(document).width() + 15 >= 992) {
                $("div.collapse").addClass('animate')
            }
        }
        else {
            $(".navbar").removeClass('bg-light')
            $("div.collapse").removeClass('animate')
        }
    }
    
    // If the scrollbar is moved, fade in navbar background
    show();
    $(document).scroll(function() {
        show();
    });

    // Fixing the expanded navbar when no scroll event occurs
    $(".navbar-toggler").click(function() {
        if ($(this).hasClass("collapsed")) {
            $(".navbar").addClass('bg-light')
        }
    });
    
    //collapse the expanded navbar upon clicking a link (for screen size smaller than large 992px)
    $("a.nav-link").click(function() {
        $("#navbar").collapse('hide');
    });
    
    //a transition from smaller screen size to larger ones 
    $(window).resize(function() {
        if ($(window).width() < 992) {
            $("div.collapse").removeClass('animate')
        }
        else {
            show();
        }
    });
    
    $(document).on('click', 'a', function() {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});