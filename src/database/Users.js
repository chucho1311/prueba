
const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllUsers = (filterParams) => {
    try {
        let Users = DB.Users;
        if (filterParams.mode) {
            return DB.Users.filter((dataUser) =>
                dataUser.mode.toLowerCase().includes(filterParams.mode)
            );
        }
        // Other if-statements will go here for different parameters
        // console.log(Users);
        return Users;
    } catch (error) {
        throw { status: 500, message: error };
    }
}

const getOneUser = (userId) => {
    try {

        const user = DB.Users.filter((user) => user.user_id === userId);
        if (!user) {
            throw {
                status: 400,
                message: `Can't find user with the id '${userId}'`
            }
        }

        return user;

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const createNewUser = (newUser) => {
    const isAlreadyAdded =
        DB.Users.findIndex((user) => user.user === newUser.user) > -1;
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `User with the name '${newUser.user}' already exists`
        }
    }

    try {
        DB.Users.push(newUser);
        saveToDatabase(DB);
        return newUser;
    } catch (error) {
        throw { status: 500, message: error?.message0 || error };
    }

};

const updateOneUser = (userId, changes) => {
    const indexForUpdated = DB.Users.findIndex((user) => user.user_id === userId);

    if (indexForUpdated === -1) {
        return;
    }

    const updatedUser = {
        ...DB.Users[indexForUpdated],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    };

    DB.Users[indexForUpdated] = updatedUser;
    saveToDatabase(DB);
    return updatedUser;
}

const deleteOneUser = (userId) => {
    const indexForDeleted = DB.Users.findIndex((user) => user.user_id === userId);

    if (indexForDeleted === -1) {
        return;
    }

    DB.Users.splice(indexForDeleted, 1);
    saveToDatabase(DB);
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
};