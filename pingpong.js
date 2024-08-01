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

let DivP1 = document.getElementById("PontosP1");
let DivP2 = document.getElementById("PontosP2");

let pontosP1 = 0;
let pontosP2 = 0;

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(128, 128, 0);
    criaBolinha(xbolinha, ybolinha, tambolinha);
    moveBolinha();
    Borda();
    criarRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    movimentaRaquete();
    colideRaquete();
}

function criaBolinha(xbolinha, ybolinha, tambolinha){
    circle(xbolinha, ybolinha, tambolinha)
}

function moveBolinha(){
    xbolinha += xVelbolinha;
    ybolinha += yVelbolinha;
}

function Borda(){
    if(xbolinha > width || xbolinha < 1){
        xVelbolinha *= -1;
    }

    if(ybolinha > height || ybolinha < 0){
        yVelbolinha *= -1;
    }

    if(xbolinha > 600){
        pontosP1++;
    }
    if(xbolinha < 1){
        pontosP2++;
    }

    AtualizarPontos();
}

function AtualizarPontos(){
    DivP1.textContent = pontosP1 / 3;
    DivP2.textContent = pontosP2 / 3;
}

function criarRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete){
    fill("blue");
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
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
    if(xbolinha - raioBolinha < xRaquete + larguraRaquete && ybolinha - raioBolinha < yRaquete + alturaRaquete && ybolinha + raioBolinha > yRaquete){
        xVelbolinha *= -1;
    } 
}