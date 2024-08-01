let xbolinha = 300;
let ybolinha = 200;
let tambolinha = 25;

let xVelbolinha = 6;
let yVelbolinha = 6;

function setup(){
    createCanvas(2000, 2000);
}

function draw(){
    background(128, 128, 0);
    criaBolinha(xbolinha, ybolinha, tambolinha);
    moveBolinha();
    Borda();
}

function criaBolinha(xbolinha, ybolinha, tambolinha){
    circle(xbolinha, ybolinha, tambolinha)
}

function moveBolinha(){
    xbolinha += xVelbolinha;
    ybolinha += yVelbolinha;
}

function Borda(){
    if(xbolinha > 2000 || xbolinha < 0){
        xVelbolinha *= -1;
    }

    if(ybolinha > 2000 || ybolinha < 0){
        yVelbolinha *= -1;
    }
}