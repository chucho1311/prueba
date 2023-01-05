const workoutServices = require("../services/workoutService")

const getAllWorkouts = (req, res) => {
  const { mode } = req.query;
  try {
    const allWorkouts = workoutServices.getAllWorkouts({ mode });
    res.send({ status: "OK", data: allWorkouts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

const getOneWorkout = (req, res) => {

  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    return;
  }

  const workout = workoutServices.getOneWorkout(workoutId);
  res.send({ status: "OK in get one workout", data: workout });
}

const createNewWorkout = (req, res) => {

  const { body } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "One of the following keys are missing" }
    })
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  try {
    const createdWorkout = workoutServices.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
}

const updateOneWorkout = (req, res) => {

  const { body, params: { workoutId } } = req;

  if (!workoutId) {
    res
      .status(400)
      .send({ status: "Failed", data: { error: "Parameter ':workoutId' can not be empty" } })
  }

  const updatedWorkout = workoutServices.updateOneWorkout(workoutId, body);
  return updatedWorkout;
}

const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    return;
  }

  const workout = workoutServices.deleteOneWorkout(workoutId);
  res.status(204).send({ status: "OK", data: workout });
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}