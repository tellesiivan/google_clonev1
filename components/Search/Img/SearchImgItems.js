import React from "react";
import DUMMY_IMG_DATA from "../../../DUMMY_IMG_DATA";
import ImgItem from "./ImgItem";

export default function SearchImgItems({ results }) {
  const testData = DUMMY_IMG_DATA();

  console.log(testData);

  return (
    <div
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4 xl:gap-x-4"
    >
      {results.map((result) => (
        <ImgItem
          key={result.image?.byteSize ?? result.fileFormat}
          image={result}
        />
      ))}
    </div>
  );
}
