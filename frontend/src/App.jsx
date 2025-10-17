// import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import LearningPage from "./pages/LearningPage.jsx";
import LessonPlayerPage from "./pages/LessonPlayerPage.jsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/courses"
          element={<h1 className="text-center mt-5">Courses Page</h1>}
        />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/learn/courses/:id" element={<LessonPlayerPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
