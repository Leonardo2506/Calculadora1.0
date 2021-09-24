const { request, response } = require('express')
let express = require('express')
let router = express.Router()
const math = require ('mathjs')

router.post('/sumar', (request, response) => {

    let matrizA = request.body.matrizA

    let matrizB = request.body.matrizB

    let suma = math.add(matrizA, matrizB)

    console.log(suma)

    let sum = {
        resultado: suma
    }

    response.send(sum)
})

router.post('/multiplicar', (request, response) => {

    let matrizA = request.body.matrizA

    let matrizB = request.body.matrizB

    let multi = math.dotMultiply(matrizA, matrizB)

    console.log(multi)

    let mul = {
        resultado: multi
    }

    response.send(mul)
})

router.post('/determinante', (request, response) => {

    let matriz = request.body.matriz

    let determi = math.det(matriz)

    console.log(determi)

    let deter = {
        resultado: determi
    }

    response.send(deter)
})

module.exports = router
