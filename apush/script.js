$(function() {

    // add on to common.js - show() function, 
    // if no scroll event, navbar links are white. if scroll bar moves down, nav-links darker color
    // color swapper with ush-link class defined in apush.css
    function show() {
        if ($(window).scrollTop()) {
            //links become dark when scroll
            $(".nav-link").removeClass("ush-link");
            $(".navbar-brand").css("color","black");
            $(".navbar-toggler").removeClass("ush-icon")
        }
        else {
            //links become white when not scroll
            $(".navbar-toggler").addClass("ush-icon")
            if ($(".navbar-collapse").hasClass("show") == false){
                $(".navbar-brand").css("color","white");
                $(".nav-link").addClass("ush-link")
            }
        }
    }
    
    $(".navbar-toggler").click(function(){
        if ($("div.navbar-collapse").hasClass("collapse")){
            $(".navbar-brand").css("color","black")
            $(".nav-link").removeClass("ush-link")
        }else{
            $(".nav-link").addClass("ush-link")
            $(".navbar-brand").css("color","black !important")
        }
    });
    
    $(window).resize(function() {
       show();
    });
    
    //calling the function upon screen finishes loading and when scrolling
    show();
    $(document).scroll(function() {
        show();
    });
    
    
    //NOTE [do not confuse] .pd-* class goes to buttons, #pd-* IDs goes to content
    $(".btn-dark").click(function(){

        //close and swap period content
        if ($(this).hasClass("s1")){
            $(".pd1,.pd2,.pd3").removeClass("disabled")
            $("#pd1, #pd2, #pd3").collapse("hide")
        }
        else if ($(this).hasClass("s2")){
            $(".pd4,.pd5,.pd6").removeClass("disabled")
            $("#pd4, #pd5, #pd6").collapse("hide")
        }else{
            $(".pd7,.pd8,.pd9").removeClass("disabled")
            $("#pd7, #pd8, #pd9").collapse("hide")
            
            //close expanded text in periods 7 and 8
            $("#more7, #more8").collapse("hide")
        }
        
        $(this).addClass("disabled")
        //however... show one of the three within that set (s1,s2,s3)
        var str1 = "#" + ($(this).attr("class")).substring(0,4) //take the first 3 letters of class list
        $(str1).toggleClass("collapse");
    });
});
