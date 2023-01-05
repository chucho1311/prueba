const usersService = require("../services/usersService");

const getAllUsers = (req, res) => {
    const { mode } = req.query;

    try {
        const allUsers = usersService.getAllUsers({ mode });
        // console.log(allUsers);
        res.send({ status: "OK", data: allUsers });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getOneUser = (req, res) => {

    const {
        params: { userId }
    } = req;

    if (!userId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "':userId' not found" }
        });
        return;
    }

    try {
        const user = usersService.getOneUser(userId);
        res.send({ status: "OK get one User", data: user });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED in get one user", data: { error: error?.message } })
    }
}

const createUser = (req, res) => {

    const { body } = req;

    if (
        !body.user ||
        !body.password
    ) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "One of the following keys are missing" }
        })
    }

    const newUser = {
        user: body.user,
        password: body.password,
        Data_pies: []
    };

    try {
        const createdUser = usersService.createNewUser(newUser);
        res.status(201).send({ status: "Created", data: createdUser });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "Failed in create", data: { error: error?.message || error } });
    }
}

const updateOneUser = (req, res) => {

    const { body, params: { userId } } = req;

    if (!userId) {
        res
            .status(400)
            .send({ status: "Failed updated", data: { error: "Parameter ':userId' can not be empty" } })
    }

    const updatedUser = usersService.updateOneUser(userId, body);
    return updatedUser;
}

const deleteOneUser = (req, res) => {
    const {
        params: { userId },
    } = req;

    if (!userId) {
        return;
    }

    const user = usersService.deleteOneUser(userId);
    res.status(204).send({ status: "OK", data: user });
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateOneUser,
    deleteOneUser
}