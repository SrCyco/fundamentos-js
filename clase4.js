var nombre = 'Sergio', edad = 24

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Vicky', 28)
imprimirEdad('Eric', 24)
imprimirEdad('Dario', 27)

var persona1 = {
    nombre: 'Sergio',
    apellido: 'Nino',
    edad: 24
}

var persona2 = {
    nombre: 'Juliana',
    apellido: 'Torres',
    edad: 16
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
    
}

function imprimirNombreYEdad( {nombre, edad} ){
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

function cumpleanios(persona) {
    // persona.edad += 1
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

function imprimirEsMayorDeEdad({ nombre, edad }){
    // if( edad >= 18){
    //     console.log(`${nombre} es mayor de edad`)
    // } else{
    //     console.log(`${nombre} es menor de edad`)
    // }

    // Operador ternario

    console.log(`${nombre} es ${edad >= 18 ? 'mayor' : 'menor'} de edad`)
}

const MAYORIA_DE_EDAD = 18;

// const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD 
// Esto es igual a la funcion de abajo con arrow function resumido 

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}


function imprimirSiEsMayorDeEdad(persona) {
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

// function permitirAcceso(persona) {
//     if(!esMayorDeEdad(persona)){
//         console.log('ACCESO DENEGADO')
//     }
// }

const permitirAcceso = persona => !esMayorDeEdad(persona) ? console.log('ACCESO DENEGADO') : ''