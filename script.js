var text = document.getElementById("inputBox");
var button = document.getElementById("addButton");
var list = document.getElementById("listElem");
var i = 0;

document.querySelector('ul').addEventListener("click", function(e) {
  const deleteButton = e.target.closest('.delete');
  if (!deleteButton) 
  {
	const editButton = e.target.closest('.edit');
	if (!editButton) 
	{
		const cancelButton = e.target.closest('.cancel');
		const okButton = e.target.closest('.ok');
		if (!okButton && !cancelButton) 
		{
			return;
		}
		let elem = okButton ? okButton.parentElement : cancelButton.parentElement;
		let newInputButton = elem.children[0].value;
		elem.removeChild(elem.firstChild);
		elem.children[1].style.display = "inline";
		elem.children[2].style.display = "inline";
		elem.children[3].style.display = "none";
		elem.children[4].style.display = "none";
		if (okButton) 
		{
			if (newInputButton != "")
			{
				elem.children[0].text = newInputButton;
			}
		}
		elem.children[0].style.display = "inline";
		return;
	}
	
	let elem = editbutton.parentElement;
	elem.children[0].style.display = "none";
	elem.children[1].style.display = "none";
	elem.children[2].style.display = "none";
	elem.children[3].style.display = "inline";
	elem.children[4].style.display = "inline";	
	let input = document.createElement("input");
	input.id = "edit-input"
	input.type = "text";
	input.value = elem.children[0].text;
	elem.prepend(input);
	return;
  }
  deleteButton.parentElement.remove();
});

button.addEventListener("click", function(e) 
{
	if (text.value.length > 0)
	{
		let elem = document.createElement("li");
		let value = "<a>" + text.value + "</a>";
		let deleteButton = "<button class=\"delete\" id=\"deletebutton\">X</button>";
		let editButton = "<button class=\"edit\" id=\"editbutton\">Изменить</button>";
		let okButton = "<button class=\"ok\" id=\"okbutton\">Ок</button>";
		let cancelButton = "<button class=\"cancel\" id=\"cancelbutton\">Отменить</button>";
		elem.innerHTML = value + deleteButton + editButton + okButton + cancelButton;
		list.append(elem);
		text.value = "";
		elem.children[3].style.display = "none";
		elem.children[4].style.display = "none";	
	}
	
		
		/*let elem = document.createElement('li');
	  	i=i+1;
		elem.id = "elem" + i;
		let value = "<a>" + text.value + "</a>";
		elem.innerHTML = value;
		list.append(elem);
		text.value="";
		
		var deleteButton = document.createElement('input');
		deleteButton.type = "button";
		deleteButton.id = "deleteButton" + i;
		deleteButton.value = "X";
		deleteButton.style.cssText = 'color: red;  background-color: transparent; border: medium none; font-size: 18px;';
		elem.appendChild (deleteButton);
		
		var newInputButton = document.createElement('text-input');
		newInputButton.value = "";
		elem.appendChild (newInputButton);
		newInputButton.style.display = 'none';
		
		var editButton = document.createElement('input');
		editButton.type = "button";
		editButton.id = "editButton" + i;
		editButton.value = "изменить";
		editButton.style.cssText = 'color: #41d109;  background-color: transparent; border: medium none; font-size: 18px;';
		elem.appendChild (editButton);
		
		var cancelButton = document.createElement('input');
		cancelButton.type = "button";
		cancelButton.value = "отменить";
		cancelButton.style.cssText = 'color: red;  background-color: transparent; border: medium none; font-size: 18px;';
		elem.appendChild (cancelButton);
		cancelButton.style.display = 'none';
		
		var okButton = document.createElement('input');
		okButton.type = "button";
		okButton.value = "ok";
		okButton.style.cssText = 'color: #41d109;  background-color: transparent; border: medium none; font-size: 18px;';
		elem.appendChild (okButton);
		okButton.style.display = 'none';
		*/
		
		/*editButton.addEventListener("click", function(e)
		{
			var str = this.id;
			var deleteElem = document.getElementById("elem" + str.replace(/[^\d]/g, ''));
			cancelButton.style.display = 'inline';
			okButton.style.display = 'inline';
			newInputButton.style.display = 'inline';
			editButton.style.display = 'none';
			deleteButton.style.display = 'none';
		});*/ 
});