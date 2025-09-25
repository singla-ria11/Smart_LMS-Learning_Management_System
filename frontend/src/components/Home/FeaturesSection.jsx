const FeaturesSection = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Why Choose Smart LMS?</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <i className="bi bi-laptop fs-1 text-primary"></i>
            <h5 className="mt-3">Accessible Anywhere</h5>
            <p className="text-muted">
              Learn at your own pace on desktop, tablet, or mobile.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-people fs-1 text-success"></i>
            <h5 className="mt-3">Expert Instructors</h5>
            <p className="text-muted">
              Courses designed and delivered by industry experts.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-award fs-1 text-warning"></i>
            <h5 className="mt-3">Certification</h5>
            <p className="text-muted">
              Earn certificates to showcase your achievements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
