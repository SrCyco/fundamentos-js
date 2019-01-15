var sergio = {
    nombre: 'Sergio',
    apellido: 'Nino',
    edad: 24,
    peso: 70
}

console.log(`Al inicio del año ${sergio.nombre} pesa ${sergio.peso}Kg`)

const VARIACION_PESO = 0.3
const DIAS_DEL_ANIO = 365
// function aumentarDePeso(persona) {
//     return persona.peso += VARIACION_PESO
// }
const aumentarDePeso = persona => persona.peso += VARIACION_PESO
const adelgazar = persona => persona.peso -= VARIACION_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


const META = sergio.peso - 3
var dias = 0

while (sergio.peso > META) {
    // debugger
    if(comeMucho()) {
        // Aumentar de peso
        aumentarDePeso(sergio)
    }
    if(realizaDeporte()){
        // adelgazar
        adelgazar(sergio)
    }
    dias ++
}


console.log(`Pasaron ${dias} dias hasta que ${sergio.nombre} adelgazo 3 kg`)