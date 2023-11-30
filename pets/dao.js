import model from "./model.js";
export const findAllPets = () => model.find();
export const findPetById = (petId) => model.findById(petId);
export const findPetByOriginalId = (petId) => model.findOne({ originalId: petId });
export const addPet = (petData) => model.create(petData);
export const deletePet = (petId) => model.deleteOne({ _id: petId });
export const updatePetById = (petId, updatedPetData) =>
    model.updateOne({ _id: petId }, { $set: updatedPetData });