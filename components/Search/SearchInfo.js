import React from "react";

export default function SearchInfo({ info }) {
  console.log(info);
  const { formattedTotalResults: results, formattedSearchTime: time } = info;

  return (
    <p className="mb-4 text-xs text-gray-500">
      About {results} results in ({time}&apos;s)
    </p>
  );
}
