/* 
	Estas organizando una fiesta exclusiva para 5 personas

*/

let invitados = [];
let i = 0;

do {
	let nombre = prompt('Como te llamas? ');
	invitados[i] = nombre;
	i++
} while (i < 5)