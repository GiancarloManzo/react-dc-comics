export default function Header({ navLinks }) {
  return (
    <header className="bg-white border-bottom">
      <div className="container d-flex align-items-center justify-content-between py-3">
        {/* Logo (per ora testo, poi mettiamo immagine) */}
        <div className="fw-bold fs-3 text-primary">DC</div>

        <nav>
          <ul className="list-unstyled d-flex gap-3 m-0 align-items-center">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className={
                    "text-decoration-none fw-semibold " +
                    (link.active
                      ? "text-primary border-bottom border-4 border-primary pb-4"
                      : "text-dark")
                  }
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
