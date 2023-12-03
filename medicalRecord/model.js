import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("medical-records", schema);
export default model;