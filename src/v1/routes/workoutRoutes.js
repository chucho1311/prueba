const express = require("express");
const router = express.Router();
const apicache = require('apicache');
const workoutController = require("../../controllers/workoutController");
const userController = require("../../controllers/recordController");


router 
    //Rutas para la informarción de Pies
    .get("/pies", workoutController.getAllWorkouts)
    .get("/:workoutId", workoutController.getOneWorkout)
    .get("/:workoutId/records", userController.getRecordForWorkout)
    .post("/", workoutController.createNewWorkout)
    .patch("/:workoutId", workoutController.updateOneWorkout)
    .delete("/:workoutId", workoutController.deleteOneWorkout)
    //Rutas para la información de Usuarios
    .get("/users", userController.getAllUsers)
    

module.exports = router;