import React from "react";
import PaginationButtons from "./PaginationBtns";
import SearchInfo from "./SearchInfo";
import SearchItems from "./SearchItems";

export default function SearchResults({ data }) {
  const { searchInformation, items: results } = data;
  return (
    <div className="z-10 p-4">
      <SearchInfo info={searchInformation} />
      <SearchItems results={results} />
      <PaginationButtons />
    </div>
  );
}
