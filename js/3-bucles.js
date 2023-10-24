//while
/*
 whole (condicion logica){
        aqui va todo el codigo que quiero repetir varias veces
        agregar un codigo para cambiar la condicion logica
 }
*/

//let renglon = 1;
//while( renglon <= 10){
  // document.write(`<p>Renglon número ${renglon} </p>`);
   //renglon = renglon + 1;
//}

//do while
let renglon = 100;

do{
    document.write(`<p>Renglon número ${renglon}</P>`);
    renglon++;
}while(renglon <= 10)

//for 

//for( inicializar una variable; condicion logica ;  incrementar una variable)

for(let contador =5; contador >= 0 ; contador--){ //o  ; contador = contador -2 
   document.write(`<p>cuenta regresiva ${contador}</p>`)
}