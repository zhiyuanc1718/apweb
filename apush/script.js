$(function() {

    function show() {
        if ($(window).scrollTop()) {
            $(".navbar").addClass('bg-light')
        }
        else {
            $(".navbar").removeClass('bg-light')
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


    $('.collapser').click(function() {
        var disp = $(this).html()
        var part = disp.substring(0, 4);
        var rem = disp.substring(5, disp.length);
        if (part == "Show") {
            $(this).html("Hide " + rem);
        }
        else {
            $(this).html("Show " + rem);
        }
    });
});
