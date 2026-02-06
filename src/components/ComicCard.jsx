export default function ComicCard({ comic }) {
  return (
    <article>
      <div className="ratio ratio-1x1">
        <img
          src={comic.thumb}
          alt={comic.series}
          className="img-fluid object-fit-cover"
        />
      </div>

      <h6 className="mt-2 text-uppercase">{comic.series}</h6>
    </article>
  );
}
