var ang = 0
var r = 1
var s = 1
var cr1 = 75
var cr2 = -75

function setup() {
    // put setup code here
    createCanvas(500, 500);
    background(169, 169, 169);
    angleMode(DEGREES);
    noStroke();
}

function draw() {
    //white semi-circle
    fill(255)
    ellipseMode(CENTER);
    translate(250, 250);
    arc(0, 0, 300, 300, 180 + r, 360 + r);

    //black semi-circle
    fill(0);
    arc(0, 0, 300, 300, 0 + r, 180 + r);

    //black semi-circle 2
    var cx = cr2 * cos(ang);
    var cy = cr2 * sin(ang);
    fill(0);
    ellipse(cx, cy, 150, 150);
    //small white circle
    fill(255);
    ellipse(cx, cy, 50, 50);

    var cx2 = cr1 * cos(ang);
    var cy2 = cr1 * sin(ang);
    //white semi-circle 2
    fill(255);
    ellipse(cx2, cy2, 150, 150);
    //small white circle
    fill(0);
    ellipse(cx2, cy2, 50, 50);

    ang += s; //angle change
    r++; //rotation of arc
}