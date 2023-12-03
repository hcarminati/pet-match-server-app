import model from "./model.js";
export const findAllMedicalRecords = () => model.find();
export const findMedicalRecordById = (medicalRecordId) => model.findById(medicalRecordId);
export const addMedicalRecord = (medicalRecordData) => model.create(medicalRecordData);
export const deleteMedicalRecord = (medicalRecordId) => model.deleteOne({ _id: medicalRecordId });
export const updateMedicalRecordById = (medicalRecordId, updatedMedicalRecordData) =>
    model.updateOne({ _id: medicalRecordId }, { $set: updatedMedicalRecordData });