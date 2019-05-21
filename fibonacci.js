var n = parseInt(prompt("Quantos elementos você quer?"));

var soma;
var x1=0;
var x2=1;

for(var i=0;i<n;i++){
	soma=x1+x2;
	if(i==0){
		document.write("sequência fibonacci: 0, ");
	}else{
		if(i==1){
			document.write("1");
		}else{
			x1=x2;
			x2=soma;
			document.write(", "+soma);
		}
	}

}