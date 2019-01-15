var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    libros: 15
}
var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    libros: 24
}
var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    libros: 32
}
var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    libros: 5
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    libros: 9
}
var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    libros: 51
}

// LISTAR UN ARRAY

var personas = [sacha, alan, martin, dario, vicky, paula]

for(var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} metros`)
}

// FILTRAR UN ARRAY

const esAlta = ({ altura }) => altura >= 1.8
const esBaja = ({ altura }) => altura < 1.8

var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function (persona) {
    //     return persona.altura > 1.8
    // })
var personasBajas = personas.filter(esBaja)
console.log(personasAltas)
console.log(personasBajas)

// TRANSFORMAR UN ARRAY

// const pasarAlturaACms = persona => {
//     // NUevo objeto
//     return {
//         // Desglosar persona
//         ...persona,
//         altura: persona.altura *100
//     }
// }


// Menera abreviada del arrow function
// Con los parentecis antes del nuevo objeto decimos 
// que retorne dicho objeto
const pasarAlturaACms = persona => ({
    // NUevo objeto
    // Desglosar persona
    ...persona,
    altura: persona.altura *100
})

var personasCms = personas.map(pasarAlturaACms)
console.log(personasCms)

// REDUCIR UN ARRAY A UN VALOR

var acum = 0

for (var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].libros   
}

const reducer = (acum, {libros}) =>  acum + libros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tiene ${acum} libros`)
console.log(`En total todos tiene ${totalDeLibros} libros`)
