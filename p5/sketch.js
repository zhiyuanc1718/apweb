var canvas;
var x, y, w, h;
var shapes = [];
var particles = [];
const rate = 100; //rate of Shape spawn

//responsive canvas
function windowResized() {
    w = $('body').width();
    h = $('body').height();
    resizeCanvas(w, h);
}

//define all variables and generate falling objects
function setup() {
    w = $('body').width();
    h = $('body').height();
    canvas = createCanvas(w, h);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    canvas.style('display', 'block');
    rectMode(CENTER)
    x = w;
    y = 4 * h / 5;
    for (var i = 0; i < 20; i++) {
        particles.push(new particle(-h / 2, h / 2, 0, w));
    }
}

function Background() {
    background(255, 255, 255);
    fill(0, 0, 0, 230)
    rect(w / 2, h / 2, w, h)
    particleB();
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
    if (frameCount % 60 == 0) {
        for (var i = 0; i < 10; i++) {
            particles.push(new particle(-h / 2, 0, 0, w));
        }
    }

    for (var t = 0; t < particles.length; t++) {
        particles[t].display()
        particles[t].move()
        if (particles[t].y > h) {
            particles.splice(t, 1)
        }
    }
}

function draw() {
    Background();
    stroke(0);
    ShapeBehavior();
    if (windowWidth >= 992) {
        textAlign(CENTER);
        fill(255)
        textSize(20);
        text("Particle Spawn Rate dS/dt = 0.5/sec", w / 2, (4.5*h)/6)
        text("Don't understand ? → Learn Calculus", w/2, (5*h)/6)
    }
}

function polygon(x, y, radius, sides) {
    var angle = TWO_PI / sides;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var pointx = x + cos(a) * radius;
        var pointy = y + sin(a) * radius;
        vertex(pointx, pointy);
    }
    endShape(CLOSE);
}

function Shape() {
    this.x = random(45, (3 / 4) * w - 35);
    this.y = 0;
    this.d_y = random(1, 1.5);
    this.d_x = random(-1, 1) * 2;
    this.cir = random(0, 1);
    this.sides = floor(random(3, 8));
    this.rad = floor(random(20, 25));
    this.display = function() {
        fill(165, 19, 39)
        push();
        translate(this.x, this.y);
        rotate(frameCount / 20.0);
        if (this.cir >= 0.8) {
            ellipse(0, 0, 1.5 * this.rad, 1.5 * this.rad)
        }
        else {
            polygon(0, 0, this.rad, this.sides)
        }
        pop();

    };
    this.move = function() {
        this.x += this.d_x
        this.y += this.d_y
    };
}

function ShapeBehavior() {
    if (frameCount % rate == 0) {
        shapes.push(new Shape());
    }

    for (var i = 0; i < shapes.length; i++) {
        shapes[i].display();
        shapes[i].move();

        if (shapes[i].x < 30 || shapes[i].x > w - 30) {
            shapes[i].d_x *= -1
        }
    }
}
