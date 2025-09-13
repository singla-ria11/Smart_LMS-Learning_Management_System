import express from "express";
import { getCourse, getCourseById } from "../controllers/courseController.js";

const courseRouter = express.Router();

// get all courses
courseRouter.get("/", getCourse);

// get details of a course by id
courseRouter.get("/:id", getCourseById);

export default courseRouter;
