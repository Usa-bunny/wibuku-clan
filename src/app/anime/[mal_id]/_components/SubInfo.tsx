import { Anime } from "@/types/anime.type";

export default function SubInfo({ anime }: { anime: Anime }) {
  return (
    <>
      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Genres</h2>

          <div className="flex flex-wrap gap-2">
            {anime.genres?.map((genre) => (
              <span key={genre.mal_id} className="badge-torii">
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Studios</h2>

          <div className="flex flex-wrap gap-2">
            {anime.studios?.map((studio) => (
              <span key={studio.mal_id} className="badge-torii">
                {studio.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Producers</h2>

          <div className="flex flex-wrap gap-2">
            {anime.producers?.map((producer) => (
              <span key={producer.mal_id} className="badge-torii">
                {producer.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Licensors</h2>

          <div className="flex flex-wrap gap-2">
            {anime.licensors?.map((licensor) => (
              <span key={licensor.mal_id} className="badge-torii">
                {licensor.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Themes</h2>

          <div className="flex flex-wrap gap-2">
            {anime.themes?.map((theme) => (
              <span key={theme.mal_id} className="badge-torii">
                {theme.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Demographics</h2>

          <div className="flex flex-wrap gap-2">
            {anime.demographics?.map((demo) => (
              <span key={demo.mal_id} className="badge-torii">
                {demo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
