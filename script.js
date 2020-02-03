var text = document.getElementById("inputBox");
var button = document.getElementById("addButton");
var list = document.getElementById("listElem");
var i = 0;


button.addEventListener("click", function(e) 
{
	if (text.value.length > 0)
	{
		let elem = document.createElement('li');
	  	i=i+1;
		elem.id = "elem" + i;
		elem.innerHTML = text.value;
		list.append(elem);
		text.value="";
		var deleteButton = document.createElement('input');
		deleteButton.type = "button";
		deleteButton.id = "deleteButton" + i;
		deleteButton.value = "X";
		deleteButton.style.cssText = 'color: red;  background-color: transparent; border: medium none; font-size: 18px;';
		elem.appendChild (deleteButton);
		deleteButton.addEventListener("click", function()
		{
			var str = this.id;
			var deleteElem = document.getElementById("elem" + str.replace(/[^\d]/g, ''));
			deleteElem.remove();
			this.remove();
		});
	} 
});



