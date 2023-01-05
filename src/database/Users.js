
const DB = require("./db.json");

const getAllUsers = (filterParams) => {
    try {
        let Users = DB.Users;
        if (filterParams.mode) {
            return DB.Users.filter((dataUser) =>
                dataUser.mode.toLowerCase().includes(filterParams.mode)
            );
        }
        // Other if-statements will go here for different parameters
        console.log(Users);
        return Users;
    } catch (error) {
        throw { status: 500, message: error };
    }
}

const getRecordForWorkout = (userId) => {
    try {

        const record = DB.Users.filter((record) => record.workout === workoutId);
        if(!record) {
            throw{
                status: 400,
                message: `Can't find workout with the id '${userId}'`
            }
        }

        return record;

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

module.exports = { 
    getAllUsers,
    getRecordForWorkout
 };