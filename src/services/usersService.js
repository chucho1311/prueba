
const Users = require('../database/Users');
const { v4: uuid } = require('uuid')

const getAllUsers = (filterParams) => {
    try {
        const allUsers = Users.getAllUsers(filterParams);
        return allUsers;
    } catch (error) {
        throw error;
    }
}

const getOneUser = (userId) => {
    try {
        const user = Users.getOneUser(userId);
        return user;
    } catch (error) {
        throw error;
    }
}

const createNewUser = (newUser) => {

    const userToInsert = {
        ...newUser,
        user_id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    // console.log(userToInsert);

    const createdUser = Users.createNewUser(userToInsert);

    return createdUser;
};

const updateOneUser = (userId, changes) => {
    const updatedUser = Users.updateOneUser(userId, changes);
    return updatedUser;
}

const deleteOneUser = (userId) => {
    Users.deleteOneUser(userId);
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
};