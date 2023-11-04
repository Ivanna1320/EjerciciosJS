/* Realizar un programa que pida una calificacion (numero) y muestra
	la nota segun la calificacion: 
	0-5 insuficiente
	6-8 suficiente
	9-10 sobresaliente
*/

let calificacion = 11;
let nota = "";

if (calificacion >= 0 && calificacion <=5) {
	nota = "Insuficiente";
} else if (calificacion >= 6 && calificacion <=8) {
	nota = "Suficiente";
} else if (calificacion >=9 && calificacion <= 10) {
	nota = "Sobresaliente";
} else {
	nota = "calificacion no valida";
}
console.log('Tu calificacion fue: ',nota);
