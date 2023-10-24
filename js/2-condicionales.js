/* if(condicion logica){
    codigo a ejecutar si se cumple la condicion logica
}
*/
//7.- escribe un programa que pida 3 numeros y escriba en la pantalla el mayor de los tres.
//6.- escribe un programa que pida dos numeros y escriba en la pantalla cual es el mayor.

const numero1 =parseInt(prompt("ingrese un primer numero"));
const numero2 =parseInt(prompt("ingrese un segundo numero"));

if(numero1 > numero2){
document.write('El numero' + numero1 +' es mayor que el numero '+numero2) ;
} else if (numero2 > numero1){
    document.write("el numero" + numero2 + "es mayor que el numero" + numero1);
} else{
    document.write("los numeros ingresados son iguales (" + numero2 +")");
}