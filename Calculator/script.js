let input = document.getElementById('inputbox')
let buttons = document.querySelectorAll('button')

let string="";
// let arr = Array.from(buttons);
// arr.forEach(button => {
// 	button.addEventListener('click', (e) =>{
// 		if(e.target.innerHTML == '='){
// 			string =eval(string)  //eval : inbuilt function in js
// 			input.value = string;
// 		}
// 		else if(e.target.innerHTML == 'AC'){
// 			string = ""
// 			input.value = string;
// 		}
// 		else if(e.target.innerHTML == 'DEL'){
// 			string = string.substring(0, string.length-1)
// 			input.value = string;
// 		}
// 		else if(e.target.innerHTML == 'sqrt'){
// 			string = Math.sqrt(string)
// 			input.value = string;

			
// 		}
// 		else{

// 		string += e.target.innerHTML
// 		input.value = string
// 		}

// 		// function sqrt(){
// 		// 	document.string.value=Math.sqrt(document.string.value, 1/2)
// 		// }
// 	})
// })

buttons.forEach(number => {
	number.addEventListener('click', (event) => {
		let btntext = event.target.innerText
		input.value += btntext

		if(btntext == "AC"){
			string = "";
			input.value = string;
		}
		else if(btntext == "sqrt"){
			string = Math.sqrt(string)
			input.value = string
		}
		else if(btntext == "="){
			string = eval(string)
			input.value = string
		}
		else if(btntext == "DEL"){
			string = string.substring(0, string.length-1)
			input.value = string
		}
		else{
			string += btntext;
			input.value = string
		}
	})
})