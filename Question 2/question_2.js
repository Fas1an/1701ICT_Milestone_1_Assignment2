let locations;
let arr_Sol = [];

let tspCoords;

let cordX = [];
let cordY = [];

let width = 1100;
let height = 1200;

//let scale = 1.8; //berlin52
let scale = 0.75;//ch150
//let scale = 0.3; //a280

function preload() {
  locations = loadStrings("TSP_EUC_Problems/ch150.tsp");
  sol = loadStrings("TSP_Solutions/ch150.sol");
}

function setup() {
  createCanvas(width, height);
  loadTSP();
  loadSOL();
}

function draw() {
  background(0);
  showLoadedTSP();
  showSolution();
}

function loadTSP() {
  tspCoords = new Array(locations.length)
 
 for(let i = 6; i < locations.length; i ++){
   let current_line = locations[i].split(" ")
   append(cordX, current_line[1]);
   append(cordY, current_line[2]);
   
  }

}

function showLoadedTSP() {
  fill(255)
  for( var i = 0; i < cordX.length; i ++){
    ellipse(75 + cordX[i]/scale, 100 + cordY[i]/scale, 10)
  }
  textSize(30)
  text(locations[0], 100, 1150);
  text(locations[2], 400, 1150);
  
}

function loadSOL() {
  for(let i = 2; i < sol.length; i ++){
    append(arr_Sol, sol[i])
  }
  }
  function showSolution() {
    stroke(255);
    for (let i = 1; i < sol.length; i++) {
      line(
        75 + cordX[i + 1] / scale,
        100 + cordY[i + 1] / scale,
        75 + cordX[i] / scale,
        100 + cordY[i] / scale
      );
    }
    fill(255);
    frameRate(2)
    ellipse(75 + cordX[animate]/scale, 100 + cordY[animate]/scale, 20);
    animate = animate + 0.5;
    if (animate == 51);
  }
  




