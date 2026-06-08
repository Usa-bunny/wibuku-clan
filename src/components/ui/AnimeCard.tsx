import Image from "next/image";
import { Anime } from "@/types/anime.type";

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <div className="card-torii group overflow-hidden">
      <div className="relative w-full h-70 overflow-hidden">
        <Image
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          fill
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {anime.score && (
          <div className="absolute top-3 right-3 badge-torii">
            ⭐ {anime.score.toFixed(1)}
          </div>
        )}

        {anime.type && (
          <div className="absolute top-3 left-3 badge-torii">{anime.type}</div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-semibold leading-tight line-clamp-2">
            {anime.title}
          </h3>

          {anime.title_japanese && (
            <p className="text-sm text-muted line-clamp-1">
              {anime.title_japanese}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-muted">
          {anime.episodes && (
            <span className="px-2 py-1 rounded-full border border-outline">
              {anime.episodes} eps
            </span>
          )}

          {anime.status && (
            <span className="px-2 py-1 rounded-full border border-outline">
              {anime.status}
            </span>
          )}

          {anime.year && (
            <span className="px-2 py-1 rounded-full border border-outline">
              {anime.year}
            </span>
          )}
        </div>

        <p className="text-sm text-muted line-clamp-3">
          {anime.synopsis || "No synopsis available."}
        </p>

        <div className="flex gap-2 pt-2">
          <a
            href={anime.url}
            target="_blank"
            className="btn-torii flex-1 text-center"
          >
            View
          </a>

          <button className="btn-torii-outline">Details</button>
        </div>
      </div>
    </div>
  );
}
