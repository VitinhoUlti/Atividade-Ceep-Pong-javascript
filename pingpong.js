let xbolinha = 300;
let ybolinha = 200;
let tambolinha = 25;

let xVelbolinha = 6;
let yVelbolinha = 6;

function setup(){
    createCanvas(10000, 10000);
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
    xbolinha += xVelbolinha;
    ybolinha += yVelbolinha;
}

function Borda(){
    if(xbolinha > 10000 || xbolinha < 0){
        xVelbolinha *= -1;
    }

    if(ybolinha > 10000 || ybolinha < 0){
        yVelbolinha *= -1;
    }
}