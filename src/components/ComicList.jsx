import ComicCard from "./ComicCard";

export default function () {
  return (
    <section>
      <div>
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </div>

      <button type="Button">Load More</button>
    </section>
  );
}
