$(function() {

    var num = 0;
    var quotes = ['"Stay Happy and Love AP"', '"The eyes of the world are upon you"', '"Life is like riding a bicycle. To keep your balance you must keep moving"'];
    var names = ["Zhiyuan Chen", "Dwight David Eisenhower", "Albert Einstein"];

    changeContent();
    setInterval(function() {
        num++;
        if (num > 2) {
            num = 0;
        }
        changeContent();
    }, 10000);

    function changeContent(){
        $('.quote').html(quotes[num]).css("color","#F1543A");
        $('.name').html(names[num]).css("color","#F39342");
    }

});
