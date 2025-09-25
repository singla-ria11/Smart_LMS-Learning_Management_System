import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Browse Categories</h2>
        <p className="text-muted mb-5">
          Choose from a wide range of subjects to start your learning journey.
        </p>
        <div className="row g-4">
          {/* Category Card 1 */}
          <div className="col-6 col-md-4 col-lg-3">
            <Link to="/courses/programming" className="text-decoration-none">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body text-center">
                  <i className="bi bi-code-slash fs-1 text-primary"></i>
                  <h6 className="mt-3 text-dark">Programming</h6>
                  <p className="text-muted small">120 courses</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Category Card 2 */}
          <div className="col-6 col-md-4 col-lg-3">
            <Link to="/courses/business" className="text-decoration-none">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body text-center">
                  <i className="bi bi-bar-chart-line fs-1 text-success"></i>
                  <h6 className="mt-3 text-dark">Business</h6>
                  <p className="text-muted small">85 courses</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Category Card 3 */}
          <div className="col-6 col-md-4 col-lg-3">
            <Link to="/courses/design" className="text-decoration-none">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body text-center">
                  <i className="bi bi-palette fs-1 text-warning"></i>
                  <h6 className="mt-3 text-dark">Design</h6>
                  <p className="text-muted small">60 courses</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Category Card 4 */}
          <div className="col-6 col-md-4 col-lg-3">
            <Link to="/courses/languages" className="text-decoration-none">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body text-center">
                  <i className="bi bi-globe fs-1 text-danger"></i>
                  <h6 className="mt-3 text-dark">Languages</h6>
                  <p className="text-muted small">45 courses</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
