export default function Footer({ sections }) {
  return (
    <footer className="footer-top text-white">
      <div className="container py-5">
        <div className="row g-4">
          {sections.map((section) => (
            <div className="col-6 col-md-3" key={section.title}>
              <h5 className="mb-3">{section.title}</h5>
              <ul className="list-unstyled m-0">
                {section.links.map((linkText) => (
                  <li key={linkText} className="mb-1">
                    <a href="#" className="footer-link text-decoration-none">
                      {linkText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-light">SIGN-UP NOW!</button>
          <div className="fw-semibold">FOLLOW US</div>
        </div>
      </div>
    </footer>
  );
}
