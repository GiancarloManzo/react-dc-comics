export default function ComicCard({ comic }) {
  return (
    <article>
      <img src={comic.thumb} alt={comic.series} />
      <h3>{comic.series}</h3>
    </article>
  );
}
