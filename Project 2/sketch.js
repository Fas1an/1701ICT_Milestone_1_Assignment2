//data from table
var Comedy = 4;
var Action = 5;
var Romance = 6;
var Drama = 1;
var SciFi = 4;

//total of data
var totaldata = [Comedy + Action + Romance + Drama + SciFi];
const totalangle = 360;

// Angles inside Circle
// (Given/Total Sum) * 360
var ComedyAngle = (Comedy / totaldata) * totalangle;
var ActionAngle = (Action / totaldata) * totalangle;
var RomanceAngle = (Romance / totaldata) * totalangle;
var DramaAngle = (Drama / totaldata) * totalangle;
var SciFiAngle = (SciFi / totaldata) * totalangle;

//Allocates Colours to each attribute within the pi chart
let CircleAngles = [
    ComedyAngle,
    ActionAngle,
    RomanceAngle,
    DramaAngle,
    SciFiAngle,
];
var names = [
    'Comedy',
    'Action',
    'Romance',
    'Drama',
    'SciFi'
];
var AngleColours = [
    [255, 0, 0], //colour 1
    [0, 255, 0], //colour 2
    [0, 0, 255], //colour 3
    [128, 0, 0], //colour 4
    [0, 128, 0], //colour 5
];

function setup() {
    // put setup code here
    createCanvas(750, 700);
    background("black");
    noStroke();
    noLoop();
    textSize(35);
    textAlign(CENTER, CENTER);
};

function draw() {
    //background square
    pieChart(500, CircleAngles);
    stroke(0);
    strokeWeight(1);
    //create legends : boxes plus name of boxes
    for (var x = 0; x <= 5; x += 1) {
        fill(AngleColours[x]);
        rect((x * 150 + 50), 600, 50, 50);
        fill(255);
        text(names[x], (x * 150 + 75), 680)
    }
};

function pieChart(diameter, data) {
    var lastAngle = 0;
    for (var i = 0; i < data.length; i++) {
        fill(AngleColours[i]);
        stroke(255);
        strokeWeight(0.5);
        arc(width / 2, height / 2.5, diameter, diameter, lastAngle, lastAngle + radians(CircleAngles[i]));
        lastAngle += radians(CircleAngles[i]);
    }
}