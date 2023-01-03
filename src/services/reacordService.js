
const Record = require('../database/Record');

const getAllUsers = (filterParams) => {
    try {
        const allUsers = Record.getAllUsers(filterParams);
        return allUsers;
    } catch (error) {
        throw error;
    }
}

const getRecordForWorkout = (workoutId) => {
    try {
        const record = Record.getRecordForWorkout(workoutId);
        return record;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllUsers,
    getRecordForWorkout
};