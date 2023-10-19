//esto es un comentario de una linea

/*
esto es un comentario
de multiples
lineas
*/

// declarar una variable (var - let; puedo cambiar su valor - const; jamas podre cambiar su valor)
let anioActual = 2023
const url = "https://universe.rollingcodeschool.com/login"

//mostrar mensajes
console.log('este es un mensaje en consola');
console.log(anioActual);
console.log(url);
console.log("año: "+ (anioActual + 2));

//modificar el contenido de una varible 
anioActual = 2024;
console.log(anioActual);

//url='otro valor';
console.log(url)

document.write('<h1>Esto es un mensaje por pantalla</h1>');
document.write('Año: '+anioActual + '<br>');
document.write('Año: '+anioActual);

//ventana emergentes
alert("esto es una prueba de alerta");

let color = prompt("ingrese un color");
console.log(color);
