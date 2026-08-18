import { Anime } from "@/types/anime.type";

export default function Header({ anime }: { anime: Anime }) {
  return (
    <>
      <div>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="badge-torii">{anime.type}</span>

          {anime.score && <span className="badge-torii">⭐ {anime.score}</span>}

          {anime.year && <span className="badge-torii">{anime.year}</span>}
        </div>

        <h1 className="text-4xl font-bold">{anime.title}</h1>

        {anime.title_japanese && <p className="mt-2">{anime.title_japanese}</p>}
      </div>
    </>
  );
}
