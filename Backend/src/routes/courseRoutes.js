import express from "express";
import {
  getCourses,
  getCourseById,
  myCourses,
  enrollStudentInCourse,
} from "../controllers/courseController.js";
import { authProtect } from "../middlewares/authMiddleware.js";

const courseRouter = express.Router();

// get all courses
courseRouter.get("/", getCourses);
courseRouter.get("/my-courses", authProtect, myCourses);

// get details of a course by id
courseRouter.get("/:id", getCourseById);

// enroll user
router.post("/:id/enroll", authProtect, enrollStudentInCourse);

export default courseRouter;
