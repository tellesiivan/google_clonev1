import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PaginationButtons from "./PaginationBtns";
import SearchInfo from "./SearchInfo";
import SearchItems from "./SearchItems";
import SearchImgItems from "./Img/SearchImgItems";
import NotFound from "../Notfound";

export default function SearchResults({ data }) {
  const router = useRouter();
  const { searchInformation, items: results } = data;
  const { type, query } = router.query;
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    setShowImg(type === "image" ? true : false);
  }, [type]);

  if (results === undefined) {
    return <NotFound q={query} />;
  }

  return (
    <div className="z-10 p-4">
      <SearchInfo info={searchInformation} />
      {showImg ? (
        <SearchImgItems results={showImg && results} />
      ) : (
        <SearchItems results={results} />
      )}
      <PaginationButtons />
    </div>
  );
}
