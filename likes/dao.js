import model from "./model.js";
export const findAllLikes = () => model.find();
export const findLikesByUserId = (userId) => model.find({ userId: userId });
export const findLikesByPetId = (petId) => model.find({ petId: petId });
export const addLike = (comment) => model.create(comment);
export const deleteLike = (likeId) => model.deleteOne({ _id: likeId });

export const clearEntireDatabase = async () => {
    try {
        return model.deleteMany({}); // Deletes all records in the model/collection
    } catch (error) {
        throw new Error('Unable to clear the database');
    }
};
