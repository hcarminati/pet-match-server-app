import mongoose from "mongoose";
const likesSchema = new mongoose.Schema({
                                        userId: String,
                                        username: String,
                                        petId: String,
                                        date: Date,
                                      });
export default likesSchema;