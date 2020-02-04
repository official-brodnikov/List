var text = document.getElementById("inputBox");
var button = document.getElementById("addButton");
var list = document.getElementById("listElem");
var i = 0;
var radio1 = document.getElementById("radio1");

document.querySelector('ul').addEventListener("click", function(e) {
	//удаление
	let deleteButton = e.target.closest('.delete');
	if (deleteButton) 
	{
		deleteButton.parentElement.remove();
		return;
	}
	
	//изменение
	const editButton = e.target.closest('.edit');
	if (!editButton) {
		return;
	}
	let listElements = editButton.parentElement;
	listElements.children[1].style.display = "none";
	listElements.children[2].style.display = "none";
	listElements.children[3].style.display = "none";
	listElements.children[4].style.display = "inline";
	listElements.children[5].style.display = "inline";	
	let input = document.createElement("input");
	input.id = "edit-input"
	input.type = "text";
	input.value = listElements.children[1].text;
	listElements.insertBefore(input, listElements.children[1]);
});

document.querySelector('ul').addEventListener("click", function(e) {
	const cancelButton = e.target.closest('.cancel');
	const okButton = e.target.closest('.ok');
	if (!okButton && !cancelButton) {
		return;
	}
	
	let listElements = okButton ? okButton.parentElement : cancelButton.parentElement;
	let newText = listElements.children[1].value;
	
	listElements.removeChild(listElements.children[1]);
	listElements.children[2].style.display = "inline";
	listElements.children[3].style.display = "inline";
	listElements.children[4].style.display = "none";
	listElements.children[5].style.display = "none";
	
	if (okButton) {
		if (newText != "")
			listElements.children[1].text = newText;	
	}
	listElements.children[1].style.display = "inline";
});


//сортировка списка
//order - bool, true - по возрастанию, иначе по убыванию
//index - bool, true - сортировка по индексам, иначе сортировка по строкам
function Sort(order, index) {
	var arrayElem = new Array();
	var arrayIndex = new Array();
	var listElem=document.getElementsByTagName('li');
	//копируем исходные данные в массивы
	for(var k=0;k<listElem.length;k++) 
	{
		arrayElem[k]=listElem[k].children[1].text;
		arrayIndex[k]=listElem[k].children[0].text;
	}
	//сортируем массивы пузырьком в зависимости от index
	if (index)
		bubbleSort(arrayElem, arrayIndex);
	else
		bubbleSort(arrayIndex, arrayElem);
	//если по убыванию
	if (!order)
	{
		arrayElem.reverse();
		arrayIndex.reverse();
	}
	//изменяем список
	for(var k=0;k<arrayElem.length;k++) 
	{
		listElem[k].children[1].text=arrayElem[k];
		listElem[k].children[0].text=arrayIndex[k];
	}
}

//сортировка пузырьком, сортируем по индексам или строкам, и "подтягиваем" второй массив, логика как у Dictionary(key, value)
function bubbleSort(arrayElem, arrayIndex) {
    for (var k = 0, endI = arrayElem.length - 1; k < endI; k++) {
        for (var j = 0, endJ = endI - k; j < endJ; j++) {
            if (arrayIndex[j] > arrayIndex[j + 1]) {
                var swapElem = arrayElem[j];
				var swapIndex = arrayIndex[j];
				arrayIndex[j] = arrayIndex[j + 1];
                arrayElem[j] = arrayElem[j + 1];
                arrayElem[j + 1] = swapElem;
				arrayIndex[j + 1] = swapIndex;
            }
        }
    }
}

//обрабатываем 	соответствующие кнопки
document.getElementById("radioSortABC").addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
		Sort(true, false);
    }
});

document.getElementById("radioSortNotABC").addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        Sort(false, false);
    }
});

document.getElementById("radioSortIndex").addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        text.value = "1";
		Sort(true, true);
    }
});


document.getElementById("radioSortNotIndex").addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        Sort(false, true);
    }
});

button.addEventListener("click", function(e) 
{
	if (text.value.length > 0)
	{
		i = i + 1;
		let elem = document.createElement("li");
		let index = "<a>" + i + ". " + "</a>";
		let value = "<a>" + text.value + "</a>";
		let deleteButton = "<button class=\"delete\" id=\"deletebutton\">X</button>";
		let editButton = "<button class=\"edit\" id=\"editbutton\">Изменить</button>";
		let okButton = "<button class=\"ok\" id=\"okbutton\">Ок</button>";
		let cancelButton = "<button class=\"cancel\" id=\"cancelbutton\">Отменить</button>";
		elem.innerHTML = index + value + deleteButton + editButton + okButton + cancelButton;
		list.append(elem);
		text.value = "";
		elem.children[4].style.display = "none";
		elem.children[5].style.display = "none";	
	}
});