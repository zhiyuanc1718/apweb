$(function() {

    var hash = "";
    const l = $("#limits");
    const d = $("#dy");
    const i = $("#int");

    const code = '<a class="nav-link js-scroll-trigger" href=';

    var lim = [code + "#scroll" + '>Basics</a',
        code + "#u2" + '>One Sided</a>',
        code + "#u3" + '>Infinity</a>',
        code + "#u4" + '>Continuity</a>'
    ];

    var dy = [code + "#scroll" + '>Differentiation</a',
        code + "#du2" + '>Derivative Table</a>',
        code + "#du3" + '>Intepretations</a>',
        code + "#du4" + '>Theorems</a>'
    ];

    var integ = [code + "#scroll" + '>Integration</a',
        code + "#iu2" + '>FTC</a>'
        // code + "#iu3" + '>Multi-Curves</a>',
        // code + "#iu4" + '>Revolution</a>'
    ];

    // Button Clicks and add Navbar Content
    $(".limit").click(function() {
        d.collapse("hide");
        i.collapse("hide");
        l.addClass("show");
        $(".nav-content").html("")
        for (x = 0; x < lim.length; x++) {
            $(".nav-content").append(lim[x])
        }
        $(".navbar-brand").html("")
        $(".navbar-brand").append('<strong>Limits</strong>')
    });

    $(".dy").click(function() {
        l.collapse("hide");
        i.collapse("hide");
        d.addClass("show");
        $(".nav-content").html("")
        for (t = 0; t < dy.length; t++) {
            $(".nav-content").append(dy[t])
        }
        $(".navbar-brand").html("")
        $(".navbar-brand").append('<strong>Derivatives</strong>')
    });

    $(".int").click(function() {
        d.collapse("hide");
        l.collapse("hide");
        i.addClass("show");
        $(".nav-content").html("")
        for (r = 0; r < integ.length; r++) {
            $(".nav-content").append(integ[r])
        }
        $(".navbar-brand").html("")
        $(".navbar-brand").append('<strong>Integrals</strong>')
    });

    $(document).on('click', 'a', function() {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top + 1
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Navbar Display Related or Window Size

    //targets appended links in navbar to trigger closing of navbar upon clicking (small screens)
    $(document).on("click", "a.nav-link", function() {
        $("#navbar").collapse('hide');
    });

    function showNav() {
        if ($(window).scrollTop() > $(window).height()) {
            $("#Nav").addClass("bg-dark")
            if ($(document).width() + 15 >= 992) {
                $("div.collapse").addClass('animate')
            }
            $("#Nav").css("display", "block")
        }
        else {
            $("#Nav").css("display", "none")
        }
    }

    $(window).resize(function() {
        if ($(window).width() < 992) {
            $("div.collapse").removeClass('animate')
        }
        else {
            showNav();
        }
    });

    showNav();
    $(document).scroll(function() {
        showNav();
    });

    //Modal Body Content 
    const g1 = '<img id="graph1" src="../img/graph1.png" alt="graph of x+1" style="width:80%">' + '<p>Clearly, the Y value at X = 3 is 4 and the function will approach 4 as X becomes 3.</p>' +
        '<p>However, if you look carefully at the equation, the function is undefined at X = 1</p>' +
        '<p>The graph shows that the function approaches a Y value of 2 for X = 1</p>';

    const g2 = '<iframe src="https://www.desmos.com/calculator/kvtixvm0hs?embed" width="90%" height="400px" style="border: 1px solid #ccc" frameborder=0></iframe>' +
        '<p>As the graph approaches X = 0 from the <strong><em>LEFT</em></strong>, the graph approaches <em><strong>negative infinity</strong></em></p>' +
        '<p>As the graph approaches X = 0 from the <strong><em>RIGHT</em></strong>, the graph approaches <em><strong>positive infinity</strong></em></p>' +
        '<p>When the left and right limits do not equal one another, we say that the limit at the X value does not exist. To be considered a limit, the value of the limits cannot be infinity (ironically, infinity has no limit).</p>';

    const g3 = '<iframe src="https://www.desmos.com/calculator/cbfetucqim?embed" width="90%" height="400px" style="border: 1px solid #ccc" frameborder=0></iframe>' +
        '<p>Looking from the left side, the expected y value (limit) is -1 at x = 2. However, looking from the right hand side, the limit is 1.</p>';

    const g4 = '<iframe src="https://www.desmos.com/calculator/iqtulixwqj?embed" width="90%" height="400px" style="border: 1px solid #ccc" frameborder=0></iframe>' +
        '<p>Looking from the right side, the expected y value (limit) is 4 at x = 4. However, looking from the left hand side, the limit is -4.</p>';

    const g5 = '<iframe src="https://www.desmos.com/calculator/nxnxg8tx6v?embed" width="90%" height="400px" style="border: 1px solid #ccc" frameborder=0></iframe>' +
        "<p>What is special about this absolute value graph? Well, it's continous if you are wondering!</p>";

    const g6 = '<iframe src="https://www.desmos.com/calculator/kjtkxxlwez?embed" width="90%" height="400px" style="border: 1px solid #ccc" frameborder=0></iframe>' +
        '<p>This graph has a vertical asymptote at x = 0. The graph has a nonremovable discontinuity.</p>';

    const g7 = '<iframe src="https://www.desmos.com/calculator/ghgkxjwvkk?embed" width="90%" height="400px" style="border: 1px solid #ccc" frameborder=0></iframe>' +
        '<p>As you probably wonder, this is indeed a piecewise function.</p>' + '<p>The jump discontinuity occurs at x = 0 where the graph approaches different values from left and right. There are two defined values for f(0).</p>';

    $(".g1").click(function() {
        $(".modal-body").html("").append(g1);
    });
    $(".g2").click(function() {
        $(".modal-body").html("").append(g2);
    });
    $(".g3").click(function() {
        $(".modal-body").html("").append(g3);
    });
    $(".g4").click(function() {
        $(".modal-body").html("").append(g4);
    });
    $(".g5").click(function() {
        $(".modal-body").html("").append(g5);
    });
    $(".g6").click(function() {
        $(".modal-body").html("").append(g6);
    });
    $(".g7").click(function() {
        $(".modal-body").html("").append(g7);
    });
});
