$(function() {

    // add on to common.js - show() function, 
    // if no scroll event, navbar links are white. if scroll bar moves down, nav-links darker color
    // color swapper with ush-link class defined in apush.css
    function show() {
        if ($(window).scrollTop()) {
            //links become dark when scroll
            $(".nav-link").removeClass("ush-link");
            $(".navbar-brand").css("color", "black");
            $(".navbar-toggler").removeClass("ush-icon")
        }
        else {
            //links become white when not scroll
            $(".navbar-toggler").addClass("ush-icon")
            if ($(".navbar-collapse").hasClass("show") == false) {
                $(".navbar-brand").css("color", "white");
                $(".nav-link").addClass("ush-link")
            }
        }
    }

    $(".navbar-toggler").click(function() {
        $(".navbar-brand").css("color", "black")
        if ($("div.navbar-collapse").hasClass("collapse")) {
            $(".nav-link").removeClass("ush-link")
        }
        else {
            $(".nav-link").addClass("ush-link")
        }
    });


    //calling the function upon screen updates / finishes loading and when scrolling 
    show();
    $(document).scroll(function() {
        show();
    });

    $(window).resize(function() {
        show();
    });

    //AP Period Selector : content Fade in & out
    $(document).on("click touchstart", ".controller", function() {
        // Get the current APUSH Period and fade it out
        var strArray = $("#periods").html().split("Period ")
        var periodNum = strArray[1].substring(0, 1)
        var newNum = periodNum;
        // This IF Statement checks if the controller is PLUS or MINUS
        if ($(this).hasClass('fa-chevron-circle-right')) {
            newNum++;
            if (newNum > 9) {
                newNum = 1;
            }
        }
        else {
            newNum--;
            if (newNum < 1) {
                newNum = 9;
            }
        }
        $("#pd" + (periodNum)).fadeOut("slow", function() {
            $("#pd" + newNum).fadeIn(1000)
            $("#periods").html('<i class="fas fa-minus-circle controller"></i> Period ' + newNum +
            ' <i class="fas fa-plus-circle controller"></i>');
        });
    });
});
