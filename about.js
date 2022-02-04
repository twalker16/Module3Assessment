console.log("hello world");

function compliment(){
	alert("You have wonderful tastes. This cat is awesome.")
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("Form submitted")
}

document.querySelector("#Cat").addEventListener("mouseover", compliment)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);