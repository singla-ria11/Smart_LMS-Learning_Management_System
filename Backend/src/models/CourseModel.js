import mongoose from "mongoose";
import { Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  decription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
