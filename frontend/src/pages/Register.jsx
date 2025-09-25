import { useState } from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/login-illustration.jpg";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register form submitted:", form);
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Illustration */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-white">
          <img
            src={illustration}
            alt="Register Illustration"
            className="img-fluid p-4"
            style={{ maxHeight: "65%" }}
          />
        </div>

        {/* Right Form */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center bg-white">
          {/* Heading OUTSIDE card */}
          <h3 className="text-center mb-4 text-primary fw-bold">
            Create Your Account
          </h3>

          <div
            className="card shadow-lg p-4 w-100"
            style={{ maxWidth: "400px", borderRadius: "12px" }}
          >
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Create a password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label fw-semibold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Re-enter your password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>

              {/* Already have account? */}
              <p className="text-center mt-4 mb-0">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-decoration-none text-primary fw-semibold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
