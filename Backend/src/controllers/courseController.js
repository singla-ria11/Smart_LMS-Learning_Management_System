//
import Course from "../models/CourseModel.js";

export const getCourse = async (req, res) => {
  try {
    // fetch all the courses from the database
    const courses = await Course.find({})
      .populate("category", "name")
      .populate("instructor", "name");
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    // fetch courses by id from the database
    const course = await Course.findById(req.params.id)
      .populate("category", "name")
      .populate("instructor", "name");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
