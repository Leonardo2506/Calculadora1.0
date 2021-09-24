let express = require('express')
let router = express.Router()
const math = require ('mathjs')

router.post('/sumar', (request, response) => {
    
    let vector = request.body.numeros 

    let suma = math.sum(vector)
    
    console.log(math.sum(vector))

    let sum = {
        resultado: suma
    }

    response.send(sum)

    console.log(request.body)
})

router.post('/multiplicacion', (request, response) => {

    let vector = request.body.numeros

    let multi = math.prod(vector)

    console.log(multi)

    let mul = {
        resultado: multi 
    }
    
    response.send(mul)
})

router.post('/resta', (request, response) => {

    let numA = request.body.numeroA 

    let numB = request.body.numeroB

    let rest = math.subtract(numA, numB)

    console.log(rest)

    let res = {
        resultado:rest
    }

    response.send(res)
})

router.post('/dividir', (request, response) => {

    let numA = request.body.numeroA

    let numB = request.body.numeroB

    let divi = math.divide(numA, numB)

    if(numB != 0)
    {
        console.log(divi)

        let div = {
        resultado: divi
        }

        response.send(div)
        
    }
    else
    {
        response.send("No se puede realizar esta cuenta")
    }
})

router.post('/extremos', (request, response) => {
    
    let vector = request.body.numeros

    let mayor = math.max(vector)

    let menor = math.min(vector)

    console.log(mayor, menor)

    let maymin = {
        max: mayor,
        min: menor
    }

    response.send(maymin)
    
})

module.exports = router