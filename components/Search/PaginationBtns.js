import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PaginationButtons() {
  const router = useRouter();
  const { query, type, start } = router.query;
  const startIndex = +start || 1;
  const next = `${startIndex + 10}`;
  const previous = `${startIndex - 10}`;
  const linkTo = `/search?query=${query}&type=${type}&start=`;

  return (
    <div className="flex items-center justify-start max-w-xs mt-4 space-x-2">
      {startIndex > 10 && (
        <Link href={`${linkTo}${previous}`} passHref>
          <div className="flex flex-row items-center px-2 py-1 text-white bg-blue-400 rounded-full cursor-pointer w-fit">
            <RiArrowDropLeftLine size="1.2em" />
            <p className="text-xs ">previous</p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link href={`${linkTo}${next}`} passHref>
          <div className="flex flex-row items-center px-2 py-1 text-white bg-blue-400 rounded-full cursor-pointer w-fit">
            <p className="text-xs ">Next</p>
            <RiArrowDropRightLine size="1.2em" />
          </div>
        </Link>
      )}
    </div>
  );
}
