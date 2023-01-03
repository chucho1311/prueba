const express = require("express");
const router = express.Router();
const apicache = require('apicache');
const workoutController = require("../../controllers/workoutController");
const userController = require("../../controllers/recordController");
const recordController = require("../../controllers/recordController");


router 
    .get("/pies", workoutController.getAllWorkouts)
    .get("/users", userController.getAllUsers)
    .get("/:workoutId", workoutController.getOneWorkout)
    .get("/:workoutId/records", recordController.getRecordForWorkout)
    .post("/", workoutController.createNewWorkout)
    .patch("/:workoutId", workoutController.updateOneWorkout)
    .delete("/:workoutId", workoutController.deleteOneWorkout)

module.exports = router;