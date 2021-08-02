var ang = 0
var r = 0
var s = 1


function setup() {
    // put setup code here
    createCanvas(500, 500);
    background(169, 169, 169);
    angleMode(DEGREES);
    noStroke()
}

function draw() {
    //white semi-circle
    fill(255)
    ellipseMode(CENTER);
    translate(250, 250);
    arc(0, 0, 300, 300, PI, PI);
    arc(0, 0, 280, 280, 180 + r, 360 + r)
        //150lack semi-circle
    fill(0);
    arc(0, 0, 300, 300, 0 + r, 180 + r);


    var cx = 0 + cos(ang)
    var cy = 0 + sin(ang)

    var cx2 = 0 + cos(ang)
    var cy2 = 0 + sin(ang)

    //150lack semi-circle 2
    ellipseMode(CENTER)
    fill(0);
    arc(cx2, cy2, 150, 150, 180, 180);

    //white semi-circle 2
    ellipseMode(CENTER)
    fill(255);
    arc(cx, cy, 150, 150, 180, 180);

    //small white circle

    fill(0);
    ellipse(cx, cy, 50, 50);

    //small white circle
    fill(255);
    ellipse(cx2, cy2, 50, 50);
    ang = ang + 1

}