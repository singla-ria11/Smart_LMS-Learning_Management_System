import mongoose from "mongoose";
import { Schema } from "mongoose";

const categrySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Course = mongoose.model("Category", categrySchema);

export default Course;
