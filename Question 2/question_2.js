function setup() {
  // put setup code here
  createCanvas(500, 500);
  background(0);
  for (let i = 0; i < lines.length; i+=50) {
    print(lines[i]);

}
}



function preload(){
lines = loadStrings('TSP_EUC_Problems/berlin52.tsp')
solutionLine =  loadStrings('TSP_Solutions/berlin52.sol')
console.log(lines)

}

function draw() {


}


function loadTSP

