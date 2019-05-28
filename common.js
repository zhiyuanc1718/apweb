$(function() {

    //common.js file is linked to apush[index] and calc[index]

    var resizeProcess = false; //dealing with screen Resizing

    function show() {
        if ($(window).scrollTop()) {
            $(".navbar").addClass('bg-light')
            if ($(document).width() + 15 >= 992) {
                $("div.collapse").addClass('animate')
            }
        }
        else {
            $(".navbar").removeClass('bg-light')
            $("#navbar").collapse('hide');
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
        if ($(window).width() < 992 - 15) {
            $("div.collapse").removeClass('animate')
            resizeProcess = true;
        }
        else {
            if (resizeProcess) {
                //using resizeProcess var to prevent collapsing
                $("#navbar").collapse('hide');
                resizeProcess = false;
            }
            show();
        }
    });

    $(document).on('click', 'a.js-scroll-trigger', function() {
        event.preventDefault();
        var hash = this.hash
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    });
});
