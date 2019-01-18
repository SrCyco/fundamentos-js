const btnEmpezar = document.getElementById('btn-play')
const yellow = document.getElementById('celeste')
const green = document.getElementById('violeta')
const purple = document.getElementById('naranja')
const orange = document.getElementById('verde')
const NUMERO_NIVELES = 10


class Juego {
    constructor (){
      this.inicializar()
      this.generarSecuencia()
      this.siguienteNivel()
    }    

    inicializar(){
        btnEmpezar.classList.add('hide');
        this.nivel = 5
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    generarSecuencia(){
        this.secuencia = new Array(NUMERO_NIVELES).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    siguienteNivel(){
        this.iluminarSecuencia()
    }

    transformarNumeroAColor(numero){
        switch (numero) {
            case 0:
                return 'celeste'
            case 1: 
                return 'violeta'    
            case 2: 
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    iluminarSecuencia(){
        for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)

        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350);
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }
}

function empezarJuego() {
    window.juego = new Juego()
    
}