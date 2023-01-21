const express = require("express");
const router = express.Router();
const apicache = require('apicache');
const workoutController = require("../../controllers/workoutController");
const userController = require("../../controllers/usersController");
const paypal = require("../../Paypal/Paypal");


router //Ruta Principal: https://prueba.up.railway.app/
    //Rutas para la informarción de Pies
    .get("/pies", workoutController.getAllWorkouts)
    .get("/pies/:workoutId", workoutController.getOneWorkout)
    .post("/pies", workoutController.createNewWorkout)
    .patch("/pies/:workoutId", workoutController.updateOneWorkout)
    .delete("/pies/:workoutId", workoutController.deleteOneWorkout)
    //Rutas para la información de Usuarios
    .get("/users", userController.getAllUsers)
    .get("/users/:userId", userController.getOneUser)
    .post("/users", userController.createUser)
    .post("/users/:userId", userController.updateOneUser)
    .delete("/users/:userId", userController.deleteOneUser)
    //Rutas para el pago de Paypal
    .get("/execute-payment", paypal.ExecutePayment)
    .post("/create-payment", paypal.CreatePayment)
    
module.exports = router;