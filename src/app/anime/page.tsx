"use client";

import { getRandomAnime } from "@/data/Anime";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export default function AnimePage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["RandomAnime"],
    queryFn: getRandomAnime,
    placeholderData: keepPreviousData,
  });

  const anime = data?.data;

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="card-torii h-125 animate-pulse" />
      </div>
    );
  }

  if (isError || !anime) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="card-torii p-6">Failed to load anime.</div>
      </div>
    );
  }
  
  return (
    <main className="max-w-6xl mx-auto px-4 my-20">
      <div className="card-torii overflow-hidden">
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 p-6">
          <div>
            <img
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              width={400}
              height={600}
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="badge-torii">{anime.type}</span>

                {anime.score && (
                  <span className="badge-torii">⭐ {anime.score}</span>
                )}

                {anime.year && (
                  <span className="badge-torii">{anime.year}</span>
                )}
              </div>

              <h1 className="text-4xl font-bold">{anime.title}</h1>

              {anime.title_japanese && (
                <p className="mt-2">{anime.title_japanese}</p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="list-torii">
                <div>
                  <p>Episodes</p>
                  <h3>{anime.episodes}</h3>
                </div>
              </div>

              <div className="list-torii">
                <div>
                  <p>Status</p>
                  <h3>{anime.status}</h3>
                </div>
              </div>

              <div className="list-torii">
                <div>
                  <p>Source</p>
                  <h3>{anime.source}</h3>
                </div>
              </div>

              <div className="list-torii">
                <div>
                  <p>Duration</p>
                  <h3>{anime.duration}</h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Genres</h2>

              <div className="flex flex-wrap gap-2">
                {anime.genres.map((genre) => (
                  <span key={genre.mal_id} className="badge-torii">
                    {genre.name}
                  </span>
                ))}

                {anime.themes.map((theme) => (
                  <span key={theme.mal_id} className="badge-torii">
                    {theme.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Synopsis</h2>

              <p>{anime.synopsis}</p>
            </div>

            {anime.studios.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-3">Studio</h2>

                <div className="flex flex-wrap gap-2">
                  {anime.studios.map((studio) => (
                    <span key={studio.mal_id} className="badge-torii">
                      {studio.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={anime.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-torii"
            >
              View on MyAnimeList
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
