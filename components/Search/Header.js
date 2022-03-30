import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { BiMicrophone } from "react-icons/bi";
import { MdClear } from "react-icons/md";

import { useState } from "react";
import User from "../User";
import { useEffect } from "react";

export default function SearchHeader({ passedQuery }) {
  const router = useRouter();

  useEffect(() => {
    setQuery(passedQuery ?? "");
  }, [passedQuery]);

  const [query, setQuery] = useState("");

  function getQuery(e) {
    setQuery(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    if (query.trim() === passedQuery) return;

    query.trim() !== "" &&
      router.push({
        pathname: "/search",
        query: { query: query.trim().toLocaleLowerCase() },
      });
    console.log(query);
  }

  return (
    <div className="fixed top-0 w-full bg-white">
      <div className="flex items-center w-full px-4 py-5 border-b border-gray-200">
        <Link href="/" passHref>
          <a className="flex">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              objectFit="cover"
              width="90"
              height="30"
              className="cursor-pointer"
              alt="Google"
            />
          </a>
        </Link>
        <form
          className="flex items-center flex-grow max-w-xl px-4 py-2 ml-8 mr-5 text-sm border border-gray-200 rounded-full focus-within:shadow-md hover:shadow-md"
          onSubmit={onSubmitHandler}
        >
          <input
            type="text"
            value={query}
            onChange={getQuery}
            className="w-full focus:outline-none"
          />
          <MdClear
            className="mr-2 text-gray-600 cursor-pointer"
            size="1.4em"
            onClick={() => setQuery("")}
          />
          <div className="hidden pl-3 border-l border-gray-300 sm:inline-flex">
            <BiMicrophone className="mr-2 text-blue-400" size="1.3em" />
            <GoSearch
              className="text-blue-400 cursor-pointer"
              size="1.3em"
              onClick={onSubmitHandler}
            />
          </div>
        </form>
        <User customClass="ml-auto" />
      </div>
    </div>
  );
}
