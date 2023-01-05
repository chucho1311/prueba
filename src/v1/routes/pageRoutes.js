const express = require("express");
const router = express.Router();
const apicache = require('apicache');
const workoutController = require("../../controllers/workoutController");
const userController = require("../../controllers/usersController");


router 
    //Rutas para la informarción de Pies
    .get("/pies", workoutController.getAllWorkouts)
    .get("/pies/:workoutId", workoutController.getOneWorkout)
    .get("/pies/:workoutId/records", userController.getRecordForWorkout)
    .post("/pies", workoutController.createNewWorkout)
    .patch("/pies/:workoutId", workoutController.updateOneWorkout)
    .delete("/pies/:workoutId", workoutController.deleteOneWorkout)
    //Rutas para la información de Usuarios
    .get("/users", userController.getAllUsers)
    

module.exports = router;