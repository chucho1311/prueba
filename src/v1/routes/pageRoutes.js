const express = require("express");
const router = express.Router();
const apicache = require('apicache');
const workoutController = require("../../controllers/workoutController");
const userController = require("../../controllers/usersController");


router 
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
    .patch("/users/:userId", userController.updateOneUser)
    .delete("/users/:userId", userController.deleteOneUser)
    
module.exports = router;