// Pidiendo información al usuario
let Bienvenida = prompt("Bienvenido a nuestro Hotel San Juan, en este momento podrá hacer la reserva del hotel.");
let usuario = prompt("Ingrese su nombre completo:");
let numerodepersonas = prompt("¿Para cuántas personas desea reservar su habitación?");
let eleccion = prompt("¿Qué tipo de habitación va a pedir? Las habitaciones disponibles son: Junior, Ejecutiva, Premium.");
let diadereserva = prompt("¿Qué día desea hacer su reserva?");
let fuma = prompt("¿Usted fuma? Si/No");
let mascotas = prompt("¿Llevará mascotas a nuestro hotel? Si/No");
let pais = prompt("¿De qué país proviene?");

// Verificando si se cumplen todas las condiciones
if (
    (usuario === "Santiago Garibello" || usuario === "Juan Diego Lopez") &&  // Condición de usuario
    (numerodepersonas >= 1 && numerodepersonas <= 9) &&  // Rango de número de personas
    (eleccion === "Junior" || eleccion === "Ejecutiva" || eleccion === "Premium") &&  // Tipo de habitación
    (diadereserva === "1 de diciembre hasta el 5" || diadereserva === "22 de septiembre hasta el 27" || diadereserva === "14 de diciembre hasta el 20") &&  // Fechas válidas
    (fuma.toLowerCase() === "no") &&  // Verificación de no fumadores
    (mascotas.toLowerCase() === "si" || mascotas.toLowerCase() === "no") &&  // Mascotas permitidas
    (pais === "Colombia" || pais === "Chile" || pais === "Argentina" || pais === "Ecuador" || pais === "Venezuela" || pais === "España" || pais === "EEUU")  // Países válidos
) {
    // Si se cumplen todas las condiciones
    let usuariodisponible = alert("Usted, " + usuario + ", ha escogido la habitación " + eleccion + " con " + numerodepersonas + " persona(s). ¿Mascotas? " + mascotas + ".");
} else {
    // Si no se cumplen las condiciones
    alert("Usted no cumple con los requisitos que requerimos, lo sentimos.");
}