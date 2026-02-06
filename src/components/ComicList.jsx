import ComicCard from "./ComicCard";

export default function ComicList({ comics }) {
  return (
    <section>
      <h2>CURRENT SERIES</h2>

      <div>
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>

      <button type="button">Load More</button>
    </section>
  );
}
