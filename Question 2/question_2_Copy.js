let locations;
let tspCoords;

let current_cords;

//setting up arrays
let cordX = [];
let cordY = [];
let id = [];

//solution array 
let arr_Sol = [];

//sorted locations array
let arr_locSol = []

//canvas size
let width = 1100;
let height = 1200;

//let scale = 1.8; //berlin52
//let scale = 0.75;//ch150
let scale = 0.3; //a280

function preload() {
  locations = loadStrings("TSP_EUC_Problems/a280.tsp");
  sol = loadStrings("TSP_Solutions/a280.sol");
}

function setup() {
  createCanvas(width, height);
  loadTSP();
  loadSOL();


}

function draw() {
  background(0);
  showLoadedTSP();
  //showSolution();
}

function loadTSP() {
  tspCoords = new Array(locations.length)
 
 for(let i = 6; i < locations.length; i ++){
   let current_cords = locations[i].split(" ")
   append(id, current_cords[0])
   append(cordX, current_cords[1]);
   append(cordY, current_cords[2]);
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
  let arr_solu = locations.slice(6, locations.length - 2)
  //console.log(arr_solu)
  for(let i = 2; i < sol.length; i ++){
    append(arr_locSol, arr_solu[sol[i]]);    
    }
    console.log(arr_locSol);
  }

function showSolution() {
 for ( let i = 6; i < locations.length; i ++){

 }
}




