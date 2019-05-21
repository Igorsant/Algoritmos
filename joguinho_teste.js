var tela = document.getElementById("tela");
var ctx = tela.getContext("2d");


var yAleatorio;
var yAleatorio2;
var xAleatorio;
var xAleatorio2;
var xComida=[];
var yComida=[];
var raio_jogador=100;


start();
ctx.fillStyle="red";
ctx.fillRect(0,0,tela.width,tela.height);
function start(){
	xAleatorio = Math.floor(Math.random()*600);
	xAleatorio2 = Math.floor(Math.random()*600);
	yAleatorio = Math.floor(Math.random()*600);
	yAleatorio2 = Math.floor(Math.random()*600);
	for(var i=0;i<15;i++){
		xComida[i] = Math.floor(Math.random()*600);
		yComida[i] = Math.floor(Math.random()*600);
	}
	gameCycle();
}

function limpa(){
	ctx.clearRect(0,0,tela.width,tela.height);
	ctx.fillStyle="red";
	ctx.fillRect(0,0,tela.width,tela.height);
}

function gameCycle(){
	limpa();
	comida();
	desenhaCirculo();
	checkColision();
	setTimeout("gameCycle()", 100);
}

function desenhaCirculo(){
	ctx.fillStyle = "green";
	ctx.beginPath();
	ctx.arc(xAleatorio,yAleatorio,raio_jogador,0,2*3.14);
	ctx.fill();
	
}
function comida(){
	for(var i=0;i<15;i++){
		ctx.fillStyle = "green";
		ctx.beginPath();
		ctx.arc(xComida[i],yComida[i],10,0,2*3.14);
		ctx.fill();
	}
}
function checkColision(){
	for(var i=0;i<15;i++){
		var distancia = Math.sqrt(Math.pow(xAleatorio-xComida[i],2)+Math.pow(yAleatorio-yComida[i],2));
		if(distancia<raio_jogador){
			xComida[i]=800;
			raio_jogador+=10;
		}
	}
	
}
onkeydown = function(e){
	var key = e.keyCode;
	if(key==37){
		xAleatorio-=10;
	}
	if(key==38){
		yAleatorio-=10;
	}
	if(key==39){
		xAleatorio+=10;
	}
	if(key==40){
		yAleatorio+=10;
	}
}

























