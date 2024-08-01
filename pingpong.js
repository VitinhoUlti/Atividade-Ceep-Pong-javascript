let xbolinha = 300;
let ybolinha = 200;
let tambolinha = 25;
let raioBolinha = tambolinha/2;

let xVelbolinha = 6;
let yVelbolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

let tamanho = 1000;

function setup(){
    createCanvas(2000, tamanho);
}

function draw(){
    background(128, 128, 0);
    criaBolinha(xbolinha, ybolinha, tambolinha);
    moveBolinha();
    Borda();
    criarRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}

function criaBolinha(xbolinha, ybolinha, tambolinha){
    circle(xbolinha, ybolinha, tambolinha)
}

function moveBolinha(){
    xbolinha += xVelbolinha;
    ybolinha += yVelbolinha;
}

function Borda(){
    if(xbolinha > width || xbolinha < 0){
        xVelbolinha *= -1;
    }

    if(ybolinha > width || ybolinha < 0){
        yVelbolinha *= -1;
    }
}

function criarRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete){
    FileList("blue");
    Reflect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}

function movimentaRaquete() {
    if(keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

function colideRaquete(){
    if(xBolinha - raioBolinha < xRaquete + larguraRaquete && ybolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){
        xvelocidade *= -1;
    } 
}