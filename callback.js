const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const options = {crossDomain: true}

function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, options, function (data) {
                resolve(data)
            }) 
            .fail(()=> reject(id))   
    })  
}


function onError(id) {    
    console.log(`Sucedio un erro al obtener el personaje ${id}`)
}

async function obtenerPersonajes(params) {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()

// PROMESAS EN PARALELO

// var ids = [1, 2, 3, 4, 5, 6, 7]
// var promesas = ids.map(id =>  obtenerPersonaje(id))
// Promise
//     .all(promesas)
//     .then(personajes => console.log(personajes))
//     .catch(onError)

// PROMESAS

// obtenerPersonaje(1)
//     .then(personaje1 => {
//         console.log(`Hola 1, yo soy ${personaje1.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(personaje2 => {
//         console.log(`Hola 2, yo soy ${personaje2.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(personaje3 => {
//         console.log(`Hola 3, yo soy ${personaje3.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(personaje4 => {
//         console.log(`Hola 4, yo soy ${personaje4.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(personaje5 => {
//         console.log(`Hola 5, yo soy ${personaje5.name}`)
//         return obtenerPersonaje(6)
//     })
//     .then(personaje6 => {
//         console.log(`Hola 6, yo soy ${personaje6.name}`)
//         return obtenerPersonaje(7)
//     })
//     .then(personaje7 => {
//         console.log(`Hola 7, yo soy ${personaje7.name}`)
//     })
//     .catch(onError)

    // CALLBACKS

// obtenerPersonaje(1, function (personaje) {
//     console.log(`Hola, yo soy ${personaje.name}`)

    // obtenerPersonaje(2, function (personaje) {
    //     console.log(`Hola, yo soy ${personaje.name}`)

    //     obtenerPersonaje(3, function (personaje) {
    //         console.log(`Hola, yo soy ${personaje.name}`)

    //         obtenerPersonaje(4, function (personaje) {
    //             console.log(`Hola, yo soy ${personaje.name}`)

    //             obtenerPersonaje(5, function (personaje) {
    //                 console.log(`Hola, yo soy ${personaje.name}`)

    //                 obtenerPersonaje(6, function (personaje) {
    //                     console.log(`Hola, yo soy ${personaje.name}`)

    //                     obtenerPersonaje(7, function (personaje) {
    //                         console.log(`Hola, yo soy ${personaje.name}`)
                            
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // })
// })