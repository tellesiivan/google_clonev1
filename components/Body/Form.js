import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { GoSearch } from "react-icons/go";
import { BiMicrophone } from "react-icons/bi";
import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");
  const router = useRouter();

  function captureValue(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    value.trim() !== "" &&
      router.push({
        pathname: "/search",
        query: { query: value.trim().toLocaleLowerCase(), type: "" },
      });
  }

  return (
    <div className="flex items-center justify-center w-full mt-40">
      <form
        className="flex flex-col items-center w-full"
        onSubmit={onSubmitHandler}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          objectFit="cover"
          width="210"
          height="70"
          alt="Google"
        />
        <div className="flex items-center w-10/12 px-4 mt-4 border border-gray-200 rounded-full md:w-5/12 h-11 sm:text-sm hover:shadow-lg focus-within:shadow-lg">
          <GoSearch className="w-8 -ml-3 text-gray-500" />
          <input
            type="text"
            name="name"
            value={value}
            onChange={captureValue}
            id="name"
            className="flex-grow bg-transparent focus:outline-none"
          />
          <BiMicrophone className="w-8 -mr-3 text-gray-500" />
        </div>
        <div className="mt-6">
          <button className="mr-1 btnSearch" type="submit">
            Google Search
          </button>
          <button className="ml-1 btnSearch">I&apos;m Feeling Lucky</button>
        </div>
      </form>
    </div>
  );
}
