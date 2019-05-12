$(function() {

    var num = 0;
    var quotes = ['"Stay Happy and Love AP"', '"The eyes of the world are upon you"', 
    '"Life is like riding a bicycle. To keep your balance you must keep moving."', 
    '"I can calculate the motion of heavenly bodies, but not the madness of people."',
    '"The important thing is not to stop questioning. Curiosity has its own reason for existing."'];
    var names = ["Zhiyuan Chen", "Dwight David Eisenhower", "Albert Einstein", "Issac Newton", "Albert Einstein"];

    changeContent();
    setInterval(function() {
        num++;
        if (num > 4) {
            num = 0;
        }
        changeContent();
    }, 8000);

    function changeContent(){
        $('.quote').html(quotes[num]).css("color","#F1543A");
        $('.name').html(names[num]).css("color","#F39342");
    }

});
