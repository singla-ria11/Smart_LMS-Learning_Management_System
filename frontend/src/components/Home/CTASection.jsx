const CTASection = () => {
  return (
    <section
      className="py-5 text-center text-white"
      style={{
        background: "linear-gradient(210deg, #4e54c8 0%, #f7b733 100%)",
      }}
    >
      <div className="container py-5">
        <h2 className="fw-bold mb-3">Ready to Start Learning?</h2>
        <p className="lead mb-4">
          Join thousands of learners and upskill yourself with Smart LMS today.
        </p>
        <a href="/signup" className="btn btn-light btn-lg px-5 shadow">
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
