let xbolinha = 300;
let ybolinha = 200;
let tambolinha = 25;

let xVelbolinha = 6;
let yVelbolinha = 6;

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(128, 128, 0);
    criaBolinha(xbolinha, ybolinha, tambolinha);
    moveBolinha();
}

function criaBolinha(xbolinha, ybolinha, tambolinha){
    circle(xbolinha, ybolinha, tambolinha)
}

function moveBolinha(){
    xBolinha += xVelbolinha;
    yBolinha += yVelbolinha;
}