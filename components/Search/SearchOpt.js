import { useRouter } from "next/router";

export default function SearchOpt({ settings }) {
  const router = useRouter();
  const query = router.query.query;

  function selectTab(type) {
    router.push({
      pathname: "/search",
      query: { query: query, type: type === "Images" ? "image" : "" },
    });
  }

  return (
    <div
      onClick={() => selectTab(settings.title)}
      className={`flex items-center space-x-2 space-y-1 border-b-4 border-transparent cursor-pointer hover:text-blue-400 hover:border-blue-400 ${
        settings.selected && "text-blue-400 border-blue-400"
      }`}
    >
      {settings.icon}
      <p className="text-xs ">{settings.title}</p>
    </div>
  );
}
