const DB = require('./db.json');
const { saveToDatabase } = require("./utils");

const getAllWorkout = (filterParams) => {
    try {
        let Data_pies = DB.Data_pies;
        if (filterParams.mode) {
            return DB.Data_pies.filter((dataPies) =>
                dataPies.mode.toLowerCase().includes(filterParams.mode)
            );
        }
        // Other if-statements will go here for different parameters
        return Data_pies;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getOneWorkout = (dataPiesId) => {
    const dataPies = DB.Data_pies.find((dataPies) => dataPies.id === dataPiesId);

    if (!dataPies) {
        return;
    }

    return dataPies;
}

const createNewWorkout = (newdataPies) => {
    const isAlreadyAdded =
        DB.Data_pies.findIndex((dataPies) => dataPies.name === newdataPies.name) > -1;
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `Workout with the name '${newdataPies.name}' already exists`
        }
    }

    try {
        DB.Data_pies.push(newdataPies);
        saveToDatabase(DB);
        return newdataPies;
    } catch (error) {
        throw { status: 500, message: error?.message0 || error };
    }

};

const updateOneWorkout = (dataPiesId, changes) => {
    const indexForUpdated = DB.Data_pies.findIndex((dataPies) => dataPies.id === dataPiesId);

    if (indexForUpdated === -1) {
        return;
    }

    const updatedWorkout = {
        ...DB.Data_pies[indexForUpdated],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    };

    DB.Data_pies[indexForUpdated] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
}

const deleteOneWorkout = (dataPiesId) => {
    const indexForDeleted = DB.Data_pies.findIndex((dataPies) => dataPies.id === dataPiesId);

    if (indexForDeleted === -1) {
        return;
    }

    DB.Data_pies.splice(indexForDeleted, 1);
    saveToDatabase(DB);
}

module.exports = {
    getAllWorkout,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};