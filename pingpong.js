let xbolinha = 300;
let ybolinha = 300;
let tambolinha = 250;

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(128, 128, 0);
    criaBolinha(xbolinha, ybolinha, tambolinha);
}

function criaBolinha(xbolinha, ybolinha, tambolinha){
    circle(xbolinha, ybolinha, tambolinha)
}