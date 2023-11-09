//notacion literal

const pelicula = {
        //propiedades -> clave : valor
        titulo: 'La mascara', 
        anio: '1994',
        duracion: '1hr 40 min',
        genero: ['comedia', 'fantasia'],
        //metodos
        iniciarPeli: function (){
                document.write(`<p>...Comenzando la reproduccion</p>`)

},
pausa: () =>{
        document.write(`<p>Se pauso la pelicula</p>`)
}
}
//mostrar objetos
console.log(pelicula);
document.write(pelicula);
document.write(`<h1>Pelicula: ${pelicula.titulo}</h1>`)
document.write(`<p>Duracion: ${pelicula.duracion}</p>`)
document.write(`<p>Año de estreno: ${pelicula['anio']}</p>`)

//agregar una nueva propiedad a un objeto
pelicula.estado = true;

console.log(pelicula)

//modificar una propiedad del objeto
pelicula.estado = false;

console.log(pelicula);

//agregamos un nuevo genero
pelicula.genero.push('Aventura');
console.log(pelicula.genero)