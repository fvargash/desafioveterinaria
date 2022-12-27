const {registrar, leer} = require('./operaciones.js')

const argumentos = process.argv.slice(2)

const [operacion, nombre, edad, animal, color, enfermedad] = argumentos

if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
}
if(operacion === "leer"){
    leer()
}