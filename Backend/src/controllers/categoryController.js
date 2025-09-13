//
import Category from "../models/CategoryModel.js";

export const getCategory = async (req, res) => {
  try {
    // fetch all the categories from the database
    const categories = await Category.find({});
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
