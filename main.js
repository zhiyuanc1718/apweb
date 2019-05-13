$(function() {

    //Add Quotes here
    var num = 0;
    var quotes = ['"Stay Happy and Love AP"', '"Motivation is brief, but discipline is unyielding."',
        '"Your tower of knowledge will fall if you' + "don't" + 'have a solid base."',
        '"Sleep can wait. Your homework' + "can't" + '."',
        '"The eyes of the world are upon you"',
        '"Life is like riding a bicycle. To keep your balance you must keep moving."',
        '"Success is not final , failure is not fatal : it is the courage to continue that counts."',
        '"Go confidently in the direction of your dreams. Live the life you have imagined."',
        '"The important thing is not to stop questioning. Curiosity has its own reason for existing."',
    ];
    var names = ["Zhiyuan Chen", "Jackson Wu", "Yahia Elhag", "Kevin Hernandez",
        "Dwight David Eisenhower", "Albert Einstein",
        "Winston Churchill", "Henry David Thoreau", "Albert Einstein"
    ];

    //JS 
    changeContent();
    setInterval(function() {
        num++;
        if (num == names.length) {
            num = 0;
        }
        changeContent();
    }, 8000);

    function changeContent() {
        $('.quote').html(quotes[num]).css("color", "#F1543A");
        $('.name').html(names[num]).css("color", "#F39342");
    }

    $(".arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#AP").offset().top
        }, 800, function() {});
    });
});
