export default function BlueBand({ links }) {
  return (
    <section className="bg-primary py-4">
      <div className="container">
        <div className="row justify-content-between align-items-center g-3">
          {links.map((item) => (
            <div className="col-6 col-md-auto" key={item.text}>
              <a
                href={item.href}
                className="d-flex align-items-center gap-2 text-white text-decoration-none fw-semibold"
                style={{ fontSize: "13px" }}
              >
                <img
                  src={item.icon}
                  alt={item.text}
                  style={{ width: 40, height: 40, objectFit: "contain" }}
                />
                <span>{item.text}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
