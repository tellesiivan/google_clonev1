import parse from "html-react-parser";

export default function SearchItem({ result }) {
  console.log(result);
  return (
    <div className="flex flex-col max-w-2xl">
      <a
        href={result.link}
        rel="noreferrer"
        target="_blank"
        className="font-medium text-blue-500 cursor-pointer text-md hover:underline"
      >
        {result.title}
      </a>
      <p className="text-xs text-gray-600">{result.displayLink}</p>
      <p className="text-sm text-justify text-gray-700">
        {parse(result.htmlSnippet)}
      </p>
    </div>
  );
}
