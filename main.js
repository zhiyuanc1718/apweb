$(function() {

    //Add Quotes here
    var num = 0;
    var quotes = ['"AP is overrated but ' + "that'" + 's why I like it."', '"Motivation is brief, but discipline is unyielding."',
        '"Your tower of knowledge will fall if you ' + "don't" + ' have a solid base."',
        '"Life is like riding a bicycle. To keep your balance you must keep moving."',
        '"Success is not final , failure is not fatal : it is the courage to continue that counts."',
        '"Go confidently in the direction of your dreams. Live the life you have imagined."',
        '"The important thing is not to stop questioning. Curiosity has its own reason for existing."',
    ];
    var names = ["Zhiyuan Chen", "Jackson Wu", "Yahia Elhag",
        "Albert Einstein", "Winston Churchill", "Henry David Thoreau", "Albert Einstein"
    ];
    
    var descript = ["Creator", "Creator", "AP Student"];

    //JS 
    changeContent();
    setInterval(function() {
        num++;
        if (num == names.length) {
            num = 0;
        }
        changeContent();
    }, 5000);

    function changeContent() {
        $('.quote').html(quotes[num]).css("color", "#F1543A");
        $('.name').html(names[num]).css("color", "#F39342");
        if (num < descript.length){
            $('.describe').html(descript[num]).css("color","#EB7466");
        }else{
            $('.describe').html("");
        }
    }

    $(".arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#AP").offset().top
        }, 800, function() {});
    });
});
