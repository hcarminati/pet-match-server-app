import model from "./model.js";
export const findAllAdoptionCenters = () => model.find();
export const findAdoptionCenterById = (adoptionCenterId) => model.findById(adoptionCenterId);
export const addAdoptionCenter = (adoptionCenterData) => model.create(adoptionCenterData);
export const deleteAdoptionCenter = (adoptionCenterId) => model.deleteOne({ _id: adoptionCenterId });
export const updateAdoptionCenterById = (adoptionCenterId, updatedAdoptionCenterData) =>
    model.updateOne({ _id: adoptionCenterId }, { $set: updatedAdoptionCenterData });