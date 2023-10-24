//7.- escribe un programa que pida 3 numeros y escriba en la pantalla el mayor de los tres.

const numero1 =parseInt(prompt("ingrese un primer numero"));
const numero2 =parseInt(prompt("ingrese un segundo numero"));
const numero3 =parseInt(prompt("ingrese un tercer numero"));

if(numero1 > numero2 && numero1 >numero3){
document.write(`El numero 1  (${numero1})  es mayor que el numero 2 (${numero2}) y 3 (${numero3}) `) ;
} else if (numero3 > numero2){
    document.write(`el numero 3 (${numero3}) es mayor que el numero 2 (${numero2})`);
} else{
    document.write(`los numeros ingresados son iguales (${numero2}) `);
}