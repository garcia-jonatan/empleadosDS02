const express = require('express')
const empleadoRuta = express.Router()

//declaramos un objeto de nuestro modelo de empleado 
let Empleado = require('../models/Empleado')

//agregar un nuevo empleado
empleadoRuta.route('/create').post((req,res)=> {
    Empleado.create(req.body)
    .then((data)=> {
        console.log('Se insertó un documento')
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

//obtenemos todos los empleados 
empleadoRuta.route('/empleados').get((req,res) => {
    Empleado.fin()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

//obtenemos un solo empleado por id
empleadoRuta.route('/empleado/:id').get((re,res) => {
    Empleado.findById(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

//actualizar un empleado 
empleadoRuta.route('/update/:id').put((req,res) => {
    Empleado.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

//eliminar un empleado 
empleadoRuta.route('/delete:id').delete((req,res) => {
    Empleado.findByIdAndRemove(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

module.exports =empleadoRuta;