// operaciones validas consultar saldo ingresar dinero y extraer dinero

let saldo= 1000;

let opcion= prompt('Seleccione una opcion: 1- consultar saldo, 2- ingresar dinero, 3- extraer dinero');
  console.log(opcion.toLowerCase())
 opcion = opcion.toLowerCase();

//if(opcion === 1 ){
        //document.write("Mostrar el saldo");
//}else if(opcion === 2){
       // document.write("Ingresar dinero");
//}else if(opcion === 3){
        //document.write("Extraer dinero")
//}else{
       // document.write("Opcion invalida")
//}

switch(opcion){
        case 'Consultar saldo':
        case 'Saldo':
        case '1':
           document.write(`Su saldo es: $${saldo}`);
           break;
        case '2':
                const deposito = parseFloat(prompt('Ingrese el monto que desea depositar'));
                //incrementar el saldo
                console.log(isNaN(deposito));// true si no es un numero y false y si no es un numero
                // preguntar si depposito es un numero
                if(!isNaN(deposito)){
                     saldo = saldo + deposito; // saldo +=  deposito
                document.write(`Su saldo actual es: $${saldo}`);
                    }else{
                        alert(`Ingreso un  monto invalido`);
                    }
                    break;
                

        case '3':
                document.write("Extraer dinero");
                break;
        default:
                document.write("Opcion invalida");  
                break;  
}