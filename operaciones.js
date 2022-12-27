const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) =>{
    const nuevoRegistro = {nombre, edad, animal, color, enfermedad}
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    citas.push(nuevoRegistro)  
    fs.writeFileSync('citas.json', JSON.stringify(citas))
}

const leer = () => {
    const citas = fs.readFileSync('citas.json', 'utf8')
    console.log(citas)
}

module.exports = {registrar, leer}