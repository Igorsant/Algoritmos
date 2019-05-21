//pedra é 0
//papel é 1
//tesoura é 2

var jogador1 = Math.round(Math.random()*2);
var jogador2 = Math.round(Math.random()*2);

var escolhas = ["pedra","papel", "tesoura"];

for(var i=0;i<3;i++){
	if(jogador1==i){
		document.write("Jogador 1 escolheu "+escolhas[i]+"<br>");
	}
	if(jogador2==i){
		document.write("Jogador 2 escolheu "+escolhas[i]+"<br>");
	}
}

if(jogador1==jogador2){
	document.write("Então empatou");
}else{
	if(escolhas[jogador1] == "pedra" && escolhas[jogador2] == "tesoura"){
		document.write("Jogador 1 ganhou");
	}else{
		if(escolhas[jogador1] == "tesoura" && escolhas[jogador2] == "papel"){
			document.write("Jogador 1 ganhou");
		}else{
			if(escolhas[jogador1] == "papel" && escolhas[jogador2] == "pedra"){
				document.write("Jogador 1 ganhou");
			}else{
				document.write("Jogador 2 ganhou");
			}
		}
	}
}