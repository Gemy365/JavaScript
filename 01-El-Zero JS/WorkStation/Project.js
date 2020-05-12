document.getElementById("Message").innerHTML = "Enter Start & End Year: <br>";

function generateYears(start,end)
{

	document.write("<select>");
	
	for(var years = start ; years <= end ; years++)
	{
		
	document.write("<option value = ' " + years + " '>" + years + "</option>");	
		
	}
	
	document.write("</select>");
	
}