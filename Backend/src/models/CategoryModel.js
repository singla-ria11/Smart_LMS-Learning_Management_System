import mongoose from "mongoose";
import { Schema } from "mongoose";

const categrySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = mongoose.model("Category", categrySchema);

export default Category;
