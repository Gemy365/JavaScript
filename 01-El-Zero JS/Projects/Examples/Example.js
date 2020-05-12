var 
	Div		=   document.getElementById("message"),
	Input 	=	document.getElementById("input"),
	Button  =	document.getElementById("button"),
	i = 0;

Div.innerHTML = "Enter Your Secret Words: ";

Button.onclick = function() {
	
	var TypeWriter = setInterval(function() {
			
		document.getElementById("type").textContent += Input.value[i];
		
		i++;
	
	if( i > Input.value.length -1 )
	{
		clearInterval(TypeWriter);
	}
	
	},100);
}
