import mongoose from "mongoose";
const adoptedPets = new mongoose.Schema({
                                        userId: String,
                                        username: String,
                                        petId: String,
                                        date: Date,
                                      });
export default adoptedPets;