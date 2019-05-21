for(var i=0;i<4;i++){
	for(var j=0;j<4;j++){
		if(i==0 || i==3 || j==0 || j==3){
			document.write("*&nbsp;");
		}else{
			document.write("&nbsp;&nbsp;&nbsp;");
		}
		
	}
	document.write("<br>")
}