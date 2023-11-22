import mongoose from "mongoose";
const commentsSchema = new mongoose.Schema({
                                        userId: String,
                                        username: String,
                                        petId: String,
                                        date: Date,
                                        comment: String,
                                      });
export default commentsSchema;