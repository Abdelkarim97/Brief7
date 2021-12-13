
var butt = document.getElementById("butt");
var titleInput = document.getElementById("input0");
var authorInput = document.getElementById("input1");
var dateInput = document.getElementById("input2");
var priceInput = document.getElementById("input3");
var languageInput = document.getElementById("input4");
var table = document.getElementById("tablo");




var error0= document.getElementById("error0");
var error1= document.getElementById("error1");
var error2= document.getElementById("error2");
var error3= document.getElementById("error3");
var error4= document.getElementById("error4");
var error5= document.getElementById("error5");


let validate = true	

butt.addEventListener('click',function (e) {

	e.preventDefault();

	// title
	if ( titleInput.value == "" ){
		error0.innerText = "Name required"
		validate = false
		}

	else if (titleInput.value.length <= 5){
		error0.innerText= "The minimum is 5 charachters"
		validate = false
	}
	else if (titleInput.value.length >= 30){
		error0.innerText= "The minimum is 5 charachters"
		validate = false
	}
	else {
		error0.innerHTML ="sent!"
		document.getElementById("error0").style.color ="green"
	}

	// Author

	if ( authorInput.value == "" ){
		error1.innerText = "Name required"
		validate = false
		}

	else if (authorInput.value.length <= 5){
		error1.innerText= "The minimum is 5 charachters"
		validate = false
	}
	else if (authorInput.value.length >= 30){
		error1.innerText= "The minimum is 5 charachters"
		validate = false
	}
	else {
		error1.innerHTML ="sent!"
		document.getElementById("error0").style.color ="green"
	}
	
	// date
	 if (dateInput.value == ""){
	 	error2.innerHTML = "Please pick a date"
	 		 validate = false
	 }
	 else {
	 	error2.innerHTML ="sent!"
		document.getElementById("error0").style.color ="green"
	 }


	 // Price
	 if (isNaN(priceInput.value) || priceInput.value <= 0){
	 	error3.innerHTML = "enter a valid number"
	 	validate = false
	 }
	 else {
	 	error3.innerHTML = "sent!"
		document.getElementById("error0").style.color ="green"
	 }

	 // Language
	 if (languageInput.value == ""){
	 	error4.innerHTML = "Please choose a number"
	 	validate = false
	 }
	 else {
	 	error4.innerHTML = "sent!"
	 	document.getElementById("error0").style.color ="green"
	}
	var form = document.getElementsByTagName ("form")[0];
	if (validate == true) {

	var input0 = titleInput.value;
	var input1 = authorInput.value;
	var input2 = dateInput.value;
	var input3 = priceInput.value;
	var input4 = languageInput.value;

	var template = `
	<tr>
		<td>${input0}</td>
		<td>${input1}</td>
		<td>${input2}</td>
		<td>${input3}</td>
		<td>${input4}</td>
	</tr>`;
	 table.innerHTML += template; 
	}
});