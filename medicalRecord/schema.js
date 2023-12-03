import mongoose from "mongoose";
const medicalRecordSchema = new mongoose.Schema({
                                          petId: String,
                                          vaccinationHistory: String,
                                          medicalConditions: String,
                                          prescription: String,
                                          treatmentHistory: String,
                                      });
export default medicalRecordSchema;