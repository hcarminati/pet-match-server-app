import model from "./model.js";
export const findAllComments = () => model.find();
export const findCommentsByUserId = (userId) => model.find({ userId: userId });
export const findCommentsByPetId = (petId) => model.find({ petId: petId });
export const addComment = (comment) => model.create(comment);
export const deleteComment = (commentId) => model.deleteOne({ _id: commentId });