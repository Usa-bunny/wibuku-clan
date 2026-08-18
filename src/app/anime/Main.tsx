"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

import AnimeCard from "@/components/ui/AnimeCard";
import { getAnime, getTopAnime } from "@/dataservices/Anime";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function AnimePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") ?? "";
  const page = Number(searchParams.get("page") ?? "1");

  const type = searchParams.get("type") ?? "";
  const status = searchParams.get("status") ?? "";
  const rating = searchParams.get("rating") ?? "";

  const params = useMemo(
    () => ({
      q: query || undefined,
      page,

      type: type || undefined,
      status: status || undefined,
      rating: rating || undefined,
    }),
    [query, page, type, status, rating],
  );

  const {
    data: anime = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Anime", params],
    queryFn: () => getTopAnime(params),
    placeholderData: keepPreviousData,
  });

  const updateParams = (
    values: Record<string, string | number | undefined>,
  ) => {
    const current = new URLSearchParams(searchParams.toString());

    Object.entries(values).forEach(([key, value]) => {
      if (value === undefined || value === "" || value === null) {
        current.delete(key);
      } else {
        current.set(key, String(value));
      }
    });

    router.push(`/anime?${current.toString()}`);
  };

  return (
    <>
      {isLoading ? (
        <div className="max-w-7xl mx-auto px-4 pt-30">
          <div className="card-torii h-125 animate-pulse" />
        </div>
      ) : isError || !anime ? (
        <div className="max-w-7xl mx-auto px-4 pt-30">
          <div className="card-torii p-6">Failed to load anime.</div>
        </div>
      ) : (
        <main className="max-w-7xl mx-auto px-4 pt-30 pb-20">
          <Breadcrumbs
            items={[
              {
                label: "Home",
                href: "/",
                icon: "house",
              },
              { label: "Anime", href: "/anime" },
            ]}
          />
          <div className="flex flex-col gap-4 mt-4 mb-8">
            <input
              className="input-torii"
              placeholder="Search anime..."
              value={query}
              onChange={(e) =>
                updateParams({
                  q: e.target.value,
                  page: 1,
                })
              }
            />

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <select
                className="input-torii"
                value={type}
                onChange={(e) =>
                  updateParams({
                    type: e.target.value,
                    page: 1,
                  })
                }
              >
                <option value="">All Type</option>
                <option value="tv">TV</option>
                <option value="movie">Movie</option>
                <option value="ova">OVA</option>
                <option value="ona">ONA</option>
                <option value="special">Special</option>
              </select>

              <select
                className="input-torii"
                value={status}
                onChange={(e) =>
                  updateParams({
                    status: e.target.value,
                    page: 1,
                  })
                }
              >
                <option value="">All Status</option>
                <option value="airing">Airing</option>
                <option value="complete">Complete</option>
                <option value="upcoming">Upcoming</option>
              </select>

              <select
                className="input-torii"
                value={rating}
                onChange={(e) =>
                  updateParams({
                    rating: e.target.value,
                    page: 1,
                  })
                }
              >
                <option value="">All Rating</option>
                <option value="g">G</option>
                <option value="pg">PG</option>
                <option value="pg13">PG13</option>
                <option value="r17">R17</option>
                <option value="r">R</option>
              </select>
            </div> */}
            
          </div>

          {anime.length === 0 ? (
            <div className="text-center py-20">Anime not found</div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {anime.map((item) => (
                  <AnimeCard key={item.mal_id} anime={item} />
                ))}
              </div>

              <div className="flex justify-center gap-3 mt-8">
                <button
                  className="btn-torii-outline"
                  disabled={page <= 1}
                  onClick={() =>
                    updateParams({
                      page: page - 1,
                    })
                  }
                >
                  Previous
                </button>

                <span className="flex items-center px-4">Page {page}</span>

                <button
                  className="btn-torii"
                  onClick={() =>
                    updateParams({
                      page: page + 1,
                    })
                  }
                >
                  Next
                </button>
              </div>
            </>
          )}
        </main>
      )}
    </>
  );
}
