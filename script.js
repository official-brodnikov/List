var text = document.getElementById("1");
var button = document.getElementById("2");
var list = document.getElementById("3");

button.addEventListener("click", function() 
{
	if (text.value.length > 0)
	{
		let elem = document.createElement('li');
	  	elem.innerHTML = text.value;
		list.append(elem);
		text.value="";
	}
});
