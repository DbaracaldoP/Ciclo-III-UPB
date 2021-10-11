let registros = [];

// const myForm = document.getElementById("form_nuevo_usuario");
// const nombreUsuario = document.getElementById("dato_nombre_usuario");
// const edad = document.getElementById("dato_edad_usuario");
// const password = document.getElementById("dato_contrasena");

// const submitForm = (e) => {
// 	e.preventDefault();

// 	if (
// 		validar_nombre_usuario(nombreUsuario.value) &&
// 		validar_edad_usuario(edad.value) &&
// 		validar_contrasena(password.value)
// 	) {
// 		agregarRegistro();

// 		let arrayOrdenado = OrdenarArreglo(registros);
// 		console.table(arrayOrdenado);

// 		myForm.reset();
// 		nombreUsuario.focus();

// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// function validar_nombre_usuario(string) {
// 	// const regexp = /^[A-Z]{1}([a-zA-Z]){2,12}$/g;
// 	// const regexp =
// 	// 	/\b([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- \']{1}[A-Z]{0,1}[a-z]{1,30}[- ]{0,1}|[a-z]{1,2}[ -\']{1}[A-Z]{1}[a-z]{1,30}){2,5}/;
// 	const regexp = /^[A-Z]{1}[a-z]*(\s[A-Z]{1}[a-z]*)*\S$/g;

// 	for (let i = 0; i < 10; i++) {
// 		if (string.includes(i)) {
// 			return true;
// 		}
// 	}

// 	if (string.length === 0) return false;

// 	if (regexp.test(string)) {
// 		return true;
// 	}
// 	return false;
// }

// function validar_edad_usuario(edad) {
// 	if (edad > 13 && edad < 110) {
// 		return true;
// 	}

// 	return false;
// }

// function validar_contrasena(string) {
// 	const regexp = /\w{6}/g;
// 	if (regexp.test(string)) {
// 		return true;
// 	}
// 	return false;
// }

function agregarRegistro() {
	registros.push({
		usuario: document.getElementById("dato_nombre_usuario").value,
		edad: document.getElementById("dato_edad_usuario").value,
		contrasena: document.getElementById("dato_contrasena").value,
	});
}

function OrdenarArreglo(arreglo) {
	return arreglo.sort((a, b) => a.edad - b.edad);
}

// myForm.addEventListener("submit", submitForm);

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
// module.exports.validar_nombre_usuario = validar_nombre_usuario;
// module.exports.validar_edad_usuario = validar_edad_usuario;
// module.exports.validar_contrasena = validar_contrasena;
