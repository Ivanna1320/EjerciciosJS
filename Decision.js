let hora = 3;
let saludo = "";
if (hora < 12) {
	saludo = "Buenos dias";
} else if (hora < 20 ) {
	saludo = "Buenas tardes";
} else {
	saludo = "Buenas noches";
}
console.log(saludo);


let nombre = "";
let saludo = "";

switch (nombre) {
	case "Maria":
		saludo = "Hola Maria";
		break;
	case "Juan":
		saludo = "Hola Juan";
		break;
	default:
		saludo = "Hola";
}
console.log(saludo);