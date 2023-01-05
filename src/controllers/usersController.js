const usersService = require("../services/usersService");

const getAllUsers = (req, res) => {
    const { mode } = req.query;

    try {
        const allUsers = usersService.getAllUsers({ mode });
        console.log(allUsers);
        res.send({ status: "OK", data: allUsers });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getRecordForWorkout = (req, res) => {

    const {
        params: { workoutId }
    } = req;

    if (!workoutId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "':workoutId' not found" }
        });
        return;
    }

    try {
        const record = recordService.getRecordForWorkout(workoutId);
        res.send({ status: "OK", data: record });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message } })
    }
}

module.exports = {
    getAllUsers,
    getRecordForWorkout
}