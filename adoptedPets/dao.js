import model from "./model.js";
export const findAllAdoptedPets = () => model.find();
export const findAdoptedPetsByUserId = (userId) => model.find({ userId: userId });
export const findAdoptedPetsByPetId = (petId) => model.find({ petId: petId });
export const addAdoptedPet = (comment) => model.create(comment);
export const deleteAdoptedPet = (petId) => model.deleteOne({ _id: petId });