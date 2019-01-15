var sergio = {
    nombre: 'Sergio',
    apellido: 'Nino',
    edad: 24,
    peso: 70
}

console.log(`Al inicio del año ${sergio.nombre} pesa ${sergio.peso}Kg`)

const VARIACION_PESO = 0.2
const DIAS_DEL_ANIO = 365
// function aumentarDePeso(persona) {
//     return persona.peso += VARIACION_PESO
// }
const aumentarDePeso = persona  => persona.peso += VARIACION_PESO
const adelgazar = persona => persona.peso -= VARIACION_PESO
for(var i = 1; i <= DIAS_DEL_ANIO; i++){
    var random = Math.random()
    if(random < 0.25){
        aumentarDePeso(sergio)
    } else if (random < 0.50){
        adelgazar(sergio)

    }
}

console.log(`Al final del año ${sergio.nombre} pesa ${sergio.peso.toFixed(1)}Kg`)