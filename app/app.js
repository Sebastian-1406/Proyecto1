let prueba = document.querySelector(".switch");

let anual = document.querySelectorAll(".planes__precio-mes");

let mes = document.querySelectorAll(".planes__precio-anual");

prueba.addEventListener("click", () => {

	prueba.classList.toggle("active")	

	let array = prueba.classList

	if(array.length == 2 ){
		mes.forEach( caja => {
			caja.style.display = 'none'

		})
		
		anual.forEach( caja => {
			caja.style.display = 'inline-flex'

		})
		
		
		
	}
	else{
		anual.forEach( caja => {
			caja.style.display = 'none'

		})
		mes.forEach( caja => {
			caja.style.display = 'inline-flex'

		})
		
	}

	

})