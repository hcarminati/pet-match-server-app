import mongoose from "mongoose";
import commentsSchema from "../comments/schema.js";
import likesSchema from "../likes/schema.js";
const userSchema = new mongoose.Schema({
                                           username: { type: String, required: true, unique: true },
                                           password: { type: String, required: true },
                                           firstName: String,
                                           email: String,
                                           lastName: String,
                                           dob: Date,
                                           role: {
                                               type: String,
                                               enum: ["ADMIN", "ADOPTER", "UPLOADER"],
                                               default: "GUEST" },
                                           comments: [commentsSchema],
                                           likes: [likesSchema],
                                       },
                                       { collection: "users" });
export default userSchema;