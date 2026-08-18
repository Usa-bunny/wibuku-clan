import { Anime } from "@/types/anime.type";

export default function Information({anime}: {anime: Anime}) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Information</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="list-torii">
            <div>
              <p>Type</p>
              <h3>{anime.type ?? "-"}</h3>
            </div>
          </div>

          <div className="list-torii">
            <div>
              <p>Status</p>
              <h3>{anime.status ?? "-"}</h3>
            </div>
          </div>

          <div className="list-torii">
            <div>
              <p>Episodes</p>
              <h3>{anime.episodes ?? "-"}</h3>
            </div>
          </div>

          <div className="list-torii">
            <div>
              <p>Duration</p>
              <h3>{anime.duration ?? "-"}</h3>
            </div>
          </div>

          <div className="list-torii">
            <div>
              <p>Source</p>
              <h3>{anime.source ?? "-"}</h3>
            </div>
          </div>

          <div className="list-torii">
            <div>
              <p>Aired</p>
              <h3>{anime.aired?.string ?? "-"}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="list-torii">
          <div>
            <p>Score</p>
            <h3>{anime.score ?? "-"}</h3>
          </div>
        </div>

        <div className="list-torii">
          <div>
            <p>Rank</p>
            <h3>#{anime.rank ?? "-"}</h3>
          </div>
        </div>

        <div className="list-torii">
          <div>
            <p>Popularity</p>
            <h3>#{anime.popularity ?? "-"}</h3>
          </div>
        </div>

        <div className="list-torii">
          <div>
            <p>Favorites</p>
            <h3>{(anime.favorites ?? 0).toLocaleString()}</h3>
          </div>
        </div>

        <div className="list-torii">
          <div>
            <p>Members</p>
            <h3>{(anime.members ?? 0).toLocaleString()}</h3>
          </div>
        </div>

        <div className="list-torii">
          <div>
            <p>Scored By</p>
            <h3>{(anime.scored_by ?? 0).toLocaleString()}</h3>
          </div>
        </div>

        <div className="list-torii">
          <div>
            <p>Rating</p>
            <h3>{anime.rating ?? "-"}</h3>
          </div>
        </div>

        <div className="list-torii">
          <div>
            <p>Season</p>
            <h3>
              {anime.season ? `${anime.season} ${anime.year ?? ""}` : "-"}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
