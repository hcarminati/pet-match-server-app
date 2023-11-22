import model from "./model.js";
export const findAllUsers = () => model.find();
export const findUserByUsername = (username) => model.findOne({ username: username });
export const updateUserByUsername = (username, updatedUserData) =>
    model.updateOne({ username: username }, { $set: updatedUserData });
export const findUserById = (userId) => model.findById(userId);
export const updateUserById = (userId, user) =>
    model.updateOne({ _id: userId }, { $set: user });
export const findUserByEmail = (userEmail) => model.findOne({ email: userEmail });
export const createUser = (userData) => model.create(userData);
export const findUserByCredentials = (usr, pass) =>
    model.findOne({ username: usr, password: pass });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
