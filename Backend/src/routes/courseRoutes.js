import express from "express";
import { getCourses, getCourseById } from "../controllers/courseController.js";

const courseRouter = express.Router();

// get all courses
courseRouter.get("/", getCourses);

// get details of a course by id
courseRouter.get("/:id", getCourseById);

export default courseRouter;
