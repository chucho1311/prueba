const recordService = require("../services/reacordService");

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
            .send({status: "FAILED", data: {error: error?.message}})
    }
}

module.exports = {
    getRecordForWorkout
}