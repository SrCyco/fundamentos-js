
class Persona{
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        var { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }
    soyAlto(){
        return this.altura >= 1.8
    }
}

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}


function responderSaludo(nombre, apellido, esDev) {
    if(esDev){
        console.log(`No sabia que eras desarrollador`)
    }else{

        console.log(`Buen día ${nombre} ${apellido}`)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var sergio = new Persona('Sergio', 'Nino', 1.85)
var erika = new Desarrollador('Erika', 'Luna', 1.65)

sacha.saludar()
sergio.saludar(responderSaludo)
erika.saludar(responderSaludo)