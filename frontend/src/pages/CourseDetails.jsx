import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaUserGraduate } from "react-icons/fa";

const backendURL = "http://localhost:3000";

export default function CourseDetails() {
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { id: courseId } = useParams();

  useEffect(() => {
    const fetchCourseById = async () => {
      try {
        const response = await axios.get(
          `${backendURL}/smartlms/api/courses/${courseId}`
        );
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
        setError("Course not found");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseById();
  }, [courseId]);

  if (isLoading)
    return (
      <div className="container my-5">
        <p>Loading course details...</p>
      </div>
    );
  if (error)
    return (
      <div className="container my-5">
        <p className="text-danger">{error}</p>
      </div>
    );

  // Fallback/default values for each field
  const title = course.title || "Mastering React: From Basics to Advanced";
  const description =
    course.description ||
    "A complete guide to modern React development including hooks, context, routing, and deployment.";
  const instructor = course.instructor?.name || "John Doe";
  const category = course.category?.name || "Frontend Development";
  const duration = course.duration || "20 hours";
  const level = course.level || "Intermediate";
  const language = course.language || "English";
  const lessonsCount = course.lessonsCount || 32;
  const price = course.price || 99.00;
  const rating = course.rating || 4.6;
  const learners = course.learners || 1200;

  return (
    <div className="container my-5">
      <div className="row">
        {/* LEFT: Course Info */}
        <div className="col-lg-8 mb-4 mb-lg-0">
          {/* Title */}
          <h2 className="fw-bold text-primary mb-2">{title}</h2>

          {/* Description */}
          <p className="text-muted mb-3">{description}</p>

          {/* Ratings & Enrollments */}
          <div className="d-flex align-items-center mb-3 flex-wrap">
            <div className="me-4 d-flex align-items-center text-warning">
              <FaStar className="me-1" />
              <strong className="me-1">{rating}</strong>
              <span className="text-muted">(200 reviews)</span>
            </div>
            <div className="d-flex align-items-center text-muted">
              <FaUserGraduate className="me-2" />
              {learners.toLocaleString()} learners enrolled
            </div>
          </div>

          {/* Metadata */}
          <div className="bg-light p-3 rounded shadow-sm mb-4">
            <div className="row text-muted small">
              <div className="col-md-4 mb-2">
                <strong>Instructor:</strong> {instructor}
              </div>
              <div className="col-md-4 mb-2">
                <strong>Category:</strong> {category}
              </div>
              <div className="col-md-4 mb-2">
                <strong>Duration:</strong> {duration}
              </div>
              <div className="col-md-4 mb-2">
                <strong>Level:</strong> {level}
              </div>
              <div className="col-md-4 mb-2">
                <strong>Language:</strong> {language}
              </div>
              <div className="col-md-4 mb-2">
                <strong>Lessons:</strong> {lessonsCount} videos
              </div>
            </div>
          </div>

          {/* What You’ll Learn */}
          <div className="mt-5">
            <h5 className="fw-semibold mb-3 text-primary">What you’ll learn</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                ✔️ React fundamentals with hands-on examples
              </li>
              <li className="list-group-item">
                ✔️ Building single-page apps (SPAs)
              </li>
              <li className="list-group-item">
                ✔️ Using React Router for navigation
              </li>
              <li className="list-group-item">
                ✔️ State management using useContext & useReducer
              </li>
              <li className="list-group-item">
                ✔️ Deployment & best practices
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT: Enroll Card */}
        <div className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: "90px" }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=800&auto=format&fit=crop&q=60"
              alt="Course Thumbnail"
              className="card-img-top rounded-top"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h4 className="fw-bold text-success mb-2">${price}</h4>
              <button className="btn btn-primary w-100 mb-2">
                Add to Cart
              </button>
              <button className="btn btn-outline-primary w-100 mb-3">
                Buy Now
              </button>
              <p className="text-muted small mb-1">✔️ Lifetime access</p>
              <p className="text-muted small mb-1">
                ✔️ Certificate on completion
              </p>
              <p className="text-muted small mb-0">
                ✔️ 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
