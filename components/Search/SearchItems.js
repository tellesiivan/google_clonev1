import React from "react";
import SearchItem from "./SearchItem";
import { useRouter } from "next/router";

export default function SearchItems({ results }) {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-5">
      {results.map((result) => (
        <SearchItem key={result.cacheId ?? result.title} result={result} />
      ))}
    </div>
  );
}
