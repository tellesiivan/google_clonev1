import { useRouter } from "next/router";
import SearchOpt from "./SearchOpt";
import { BiImage } from "react-icons/bi";
import { GoSearch } from "react-icons/go";

export default function SearchHeadOpts() {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className="flex justify-center w-full space-x-6 text-gray-600 border-b border-gray-300 select-none md:pl-36 md:justify-start">
      <SearchOpt
        settings={{
          title: "All",
          icon: <GoSearch />,
          selected: type === "" || !type,
        }}
      />
      <SearchOpt
        settings={{
          title: "Images",
          icon: <BiImage />,
          selected: type === "image",
        }}
      />
    </div>
  );
}
