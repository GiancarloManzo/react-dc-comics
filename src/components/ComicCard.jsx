export default function ComicCard({ comic }) {
  return (
    <article>
      <div className="ratio ratio-1x1">
        <img
          src={comic.thumb}
          alt={comic.series}
          className="img-fluid object-fit-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/300x300?text=DC+Comics";
          }}
        />
      </div>

      <h6 className="mt-2 text-uppercase small fw-semibold">{comic.series}</h6>
    </article>
  );
}
