"use client";

import React from "react";
import { getAnimeById } from "@/dataservices/Anime";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Information from "./_components/Information";
import Header from "./_components/Header";
import SubInfo from "./_components/SubInfo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export default function AnimeDetails({
  params,
}: {
  params: Promise<{ mal_id: string }>;
}) {
  const mal_id = React.use(params).mal_id;
  console.log(mal_id);

  const {
    data: anime,
    isLoading: isAnimeLoading,
    isError: isAnimeError,
  } = useQuery({
    queryKey: ["AnimeDetails", mal_id],
    queryFn: () => getAnimeById({ id: Number(mal_id) }),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      {isAnimeLoading ? (
        <div className="max-w-7xl mx-auto px-4 pt-30">
          <div className="card-torii h-125 animate-pulse" />
        </div>
      ) : isAnimeError || !anime ? (
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
              {
                label: `${anime.title}`,
                href: `/anime/${anime.mal_id}`,
              },
            ]}
          />
          <div className="grid lg:grid-cols-[300px_1fr] gap-6 p-6 relative">
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              width={400}
              height={600}
              className="w-full rounded-xl object-cover lg:sticky lg:left-0 lg:top-25"
            />

            <div className="space-y-5">
              <Header anime={anime} />

              <div>
                <h2 className="text-xl font-semibold mb-3">Synopsis</h2>

                <p>{anime.synopsis}</p>
              </div>

              {anime.broadcast && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">Broadcast</h2>

                  <div className="list-torii">
                    <div>
                      <p>Schedule</p>
                      <h3>{anime.broadcast.string}</h3>
                    </div>
                  </div>
                </div>
              )}

              <Information anime={anime} />

              <SubInfo anime={anime} />

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Alternative Titles
                </h2>

                <div className="space-y-2">
                  {anime.title_english && (
                    <div className="list-torii">
                      English: {anime.title_english}
                    </div>
                  )}

                  {anime.title_japanese && (
                    <div className="list-torii">
                      Japanese: {anime.title_japanese}
                    </div>
                  )}

                  {anime.title_synonyms?.map((title) => (
                    <div key={title} className="list-torii">
                      {title}
                    </div>
                  ))}
                </div>
              </div>

              {anime.trailer?.embed_url && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">Trailer</h2>

                  <div className="overflow-hidden rounded-2xl border border-(--outline)">
                    <iframe
                      src={anime.trailer.embed_url}
                      className="w-full aspect-video"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {anime.background && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">Background</h2>

                  <p>{anime.background}</p>
                </div>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
