const myForm = document.getElementById("form_nuevo_usuario");
const nombreUsuario = document.getElementById("dato_nombre_usuario");
const edad = document.getElementById("dato_nombre_usuario");

const submitForm = (e) => {
	e.preventDefault();

	if (
		validar_nombre_usuario(nombreUsuario.value) &&
		validar_edad_usuario(edad.value)
	) {
		console.info("Informacion validada con exito");

		return true;
	} else {
		console.info("los datos son incorrectos");

		return false;
	}
};

function validar_nombre_usuario(string) {
	// const regexp = /^[A-Z]{1}([a-zA-Z]){2,12}$/g;
	// const regexp =
	// 	/\b([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- \']{1}[A-Z]{0,1}[a-z]{1,30}[- ]{0,1}|[a-z]{1,2}[ -\']{1}[A-Z]{1}[a-z]{1,30}){2,5}/;
	const regexp = /^[A-Z]{1}[a-z]*(\s[A-Z]{1}[a-z]*)*\S$/g;

	for (let i = 0; i < 10; i++) {
		if (string.includes(i)) {
			return true;
		}
	}

	if (string.length === 0) return false;

	if (regexp.test(string)) {
		console.info(`${string} paso la validacion`);
		return true;
	}
	console.error(`${string} no paso la validacion`);
	return false;
}

function validar_edad_usuario(edad) {
	var edad2 = edad.value;

	if (edad2 > 13 && edad2 < 110) {
		return true;
	}
}

myForm.addEventListener("submit", submitForm);

module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.validar_nombre_usuario = validar_nombre_usuario;
