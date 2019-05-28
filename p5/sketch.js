var canvas;
var w, h;
var particles = [];
var time; //keeps track of the time when one math drawing is finished
var coef = 2; //controls the coefficient of the math equation
var theta = 0; //controls the angle limit, ranges from 0 to 2PI
const func = ["sin((5/4) * d)", "(1/2) * (sin (3 * d) + pow(cos (5 * d), 2) + 0.3)",
    "(1/5) * (pow(2.718281828459045, sin(d)) - 2 * cos(4 * d)  + pow((sin(2 * d - PI) / 24), 5))",
    "sin(coef * d)", "cos(coef * d)"
];
var i = 0;
var maxDeg = [];

//responsive canvas
function windowResized() {
    w = $('body').width();
    h = $('body').height();
    resizeCanvas(w, h);
}

//defines all variables and generates falling objects
function setup() {
    maxDeg = [4 * TWO_PI, TWO_PI, 2 * TWO_PI, TWO_PI, TWO_PI];
    w = $('body').width();
    h = $('body').height();
    canvas = createCanvas(w, h);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    canvas.style('display', 'block');
    x = w;
    y = 4 * h / 5;
    for (var i = 0; i < 20; i++) {
        particles.push(new particle(-h / 2, h / 2, 0, w));
    }
}

//white falling
function particle(y_min, y_max, x_min, x_max) {
    this.x = random(x_min, x_max)
    this.y = random(y_min, y_max)
    this.s = random(0.5, 2)

    if (this.s > 1.5) {
        this.sp = random(3.3, 3.6)
    }
    else if (this.s >= 1 && this.s <= 1.5) {
        this.sp = random(3, 3.2)
    }
    else {
        this.sp = random(2.5, 2.9)
    }
    this.display = function() {
        stroke("white")
        ellipse(this.x, this.y, 1, 1)
    };
    this.move = function() {
        this.y += this.sp;
    };
}

//activating falling animation and spawn new objects
function particleB() {
    if (frameCount % 120 == 0) {
        for (var i = 0; i < 10; i++) {
            particles.push(new particle(-h / 2, 0, 0, w));
        }
    }
    for (var t = 0; t < particles.length; t++) {
        particles[t].display();
        particles[t].move();
        if (particles[t].y > h) {
            particles.splice(t, 1);
        }
    }
}

function draw() {
    var r, x, y;
    background(0);
    particleB();
    stroke(255);

    //Controls Drawing Speed
    if (theta < maxDeg[i] && frameCount % 8 == 0) {
        theta += TWO_PI / 40
        time = frameCount;
    }

    //One Drawing finished
    if (theta >= maxDeg[i]) {
        if (frameCount - time > 120) {
            if (i > 2) {
                coef++;
                if (coef > 9) {
                    coef = 2;
                    i++;
                    if (i > 4) {
                        i = 0;
                    }
                }
            }
            else {
                i++;
            }
            theta = 0;
        }
    }

    //draw shape with loop, max revolution 2PI
    translate(w / 2, h / 2)
    noFill()

    polar(1);
    if (i == 2) {
        polar(1.1);
        polar(1.4);
        polar(1.6);
    }

}

function polar(size) {
    beginShape();
    for (var d = 0; d < theta; d += 0.01) {
        r = eval(func[i])
        if (w >= 992) {
            r *= w / 6
        }
        else {
            r *= w / 4
        }
        r *= size;
        x = r * cos(d)
        y = r * sin(d)
        if (i == 0) {
            x *= -1
        }
        vertex(x, -y)
    }
    endShape()
}
