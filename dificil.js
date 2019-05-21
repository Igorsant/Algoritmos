var n = prompt("Frase");
var numeros = n.split(',');

var upercase = true;
var lowercase = false;
var ponto = false;

for(var i=0;i<numeros.length;i++){
	if(upercase){
		upercase = false;
		for(var j=1;j<=26;j++){
			if(numeros[i]%27==j){
				document.write(String.fromCharCode(64+j));
				upercase = true;	
			}
		}
		if(!upercase){
			lowercase = true;
			i++;
		}
	}
	if(lowercase){
		lowercase = false;
		for(var j=1;j<=26;j++){
			if(numeros[i]%27==j){
				document.write(String.fromCharCode(96+j));
				lowercase = true;
			}
		}
		if(!lowercase){
			ponto = true;
			i++;
		}
	}
	if(ponto){
		ponto = false;
		if(numeros[i]%9==1){
			document.write("!");
			ponto = true;
		}
		if(numeros[i]%9==2){
			document.write("?");
			ponto = true;
		}
		if(numeros[i]%9==3){
			document.write(",");
			ponto = true;
		}
		if(numeros[i]%9==4){
			document.write(".");
			ponto = true;
		}
		if(numeros[i]%9==5){
			document.write(" ");
			ponto = true;
		}
		if(numeros[i]%9==6){
			document.write(";");
			ponto = true;
		}
		if(numeros[i]%9==7){
			document.write("&quot");
			ponto = true;
		}
		if(numeros[i]%9==8){
			document.write("'");
			ponto = true;
		}
		if(!ponto){
			upercase = true;
		}
	}
}

