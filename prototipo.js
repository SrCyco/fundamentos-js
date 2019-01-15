function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

// Reto
Persona.prototype.soyAlto = function() {
    // this.altura > 1.8 ? console.log(`Hola, soy alto `) : console.log('hola, No sot alto')
    console.log(`Hola, ${this.altura >= 1.8 ? 'soy' : 'no soy'} alto`)
}

Persona.prototype.soyAlto =  function () {
    return this.altura >= 1.8
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)    
}
// var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
// var sergio = new Persona('Sergio', 'Nino', 1.85)
