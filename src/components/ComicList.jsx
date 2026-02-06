import ComicCard from "./ComicCard";

export default function ComicList({ comics }) {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="bg-primary d-inline-block px-3 py-2 mb-4">
          CURRENT SERIES
        </h2>

        <div className="row g-4">
          {comics.map((comic) => (
            <div className="col-6 col-md-4 col-lg-2" key={comic.id}>
              <ComicCard comic={comic} />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button type="button" className="btn btn-primary px-4">
            LOAD MORE
          </button>
        </div>
      </div>
    </section>
  );
}
