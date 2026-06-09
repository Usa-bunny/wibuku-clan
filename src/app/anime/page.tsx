import { Suspense } from "react";
import { AnimePageContent } from "./Main";

export default function AnimePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 pt-30 animate-pulse">
          <div className="card-torii h-125" />
        </div>
      }
    >
      <AnimePageContent />
    </Suspense>
  );
}