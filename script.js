$(function() {
    function show() {
        if ($(window).scrollTop()) {
            $(".navbar").addClass('bg-light')
            if ($(document).width() + 15 >= 992){
                $("div.collapse").addClass('BorderBar')
            }
        }
        else {
            $(".navbar").removeClass('bg-light')
            $("div.collapse").removeClass('BorderBar')
        }
    }

    show();
    $(document).scroll(function() {
        show();
    });
    
    $(".navbar-toggler").click(function(){
        if ($(this).hasClass("collapsed")){
            $(".navbar").addClass('bg-light')
        }
    });
    
});
