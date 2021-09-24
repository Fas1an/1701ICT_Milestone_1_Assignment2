let locations;
let arr_Sol = [];

let tspCoords;

let cordX = [];
let cordY = [];

let width = 1800;
let height = width * 0.77;



function preload() {
  locations = loadStrings("TSP_EUC_Problems/ch150.tsp");
  sol = loadStrings("TSP_Solutions/berlin52.sol");
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
  for( var i = 0; i < cordX.length; i ++ ){
    ellipse(cordX[i], cordY[i], 10)
  }
  
}

function loadSOL() {
  for(let i = 2; i < sol.length; i ++){
    append(arr_Sol, sol[i])
  }
  }

function showSolution() {
 
}
