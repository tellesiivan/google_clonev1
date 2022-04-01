import React from "react";
import SearchItem from "./SearchItem";

export default function SearchItems({ results }) {
  return (
    <div className="flex flex-col space-y-5">
      {results.map((result) => (
        <SearchItem key={result.cacheId ?? result.title} result={result} />
      ))}
    </div>
  );
}
