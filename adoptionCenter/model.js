import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("adoption-centers", schema);
export default model;