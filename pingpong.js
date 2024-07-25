let xbolinha = 300;
let ybolinha = 200;
let tambolinha = 25;

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