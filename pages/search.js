import { useRouter } from "next/router";
import Head from "next/head";
import SearchHeader from "../components/Search/Header";
import DUMMY_DATA from "../DUMMY_DATA";
import SearchResults from "../components/Search/SearchResults";

export default function Search({ data }) {
  const router = useRouter();
  const { query } = router.query;

  return (
    <>
      <Head>
        <title>Searching for {query}</title>
      </Head>
      <SearchHeader passedQuery={query} />
      <SearchResults data={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const placeHolderData = true;
  const { query, type } = context.query;

  let searchType = type === "image" ? "&searchType=image" : "";

  const req = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query}${searchType}`
  );

  const data = placeHolderData ? DUMMY_DATA() : await req.json();

  return {
    props: {
      data,
    },
  };
}
