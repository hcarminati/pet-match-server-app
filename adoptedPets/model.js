import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("adoptedPets", schema);
export default model;