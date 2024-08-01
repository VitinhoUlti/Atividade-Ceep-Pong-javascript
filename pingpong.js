let xbolinha = 300;
let ybolinha = 200;
let tambolinha = 25;

let xVelbolinha = 6;
let yVelbolinha = 6;

let tamanho = 2000;

function Criar(){
    function setup(){
        createCanvas(tamanho, tamanho);
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
        if(xbolinha > width || xbolinha < 0){
            xVelbolinha *= -1;
        }
    
        if(ybolinha > width || ybolinha < 0){
            yVelbolinha *= -1;
        }
    }
}