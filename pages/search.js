import { useRouter } from "next/router";
import Head from "next/head";
import SearchHeader from "../components/Search/Header";
import SearchResults from "../components/Search/SearchResults";

export default function Search({ data }) {
  const router = useRouter();
  const { query } = router.query;
  const { items: results } = data;

  return (
    <>
      <Head>
        <title>Searching for {query}</title>
      </Head>
      {results !== undefined && <SearchHeader passedQuery={query} />}
      <SearchResults data={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || 1;
  const { query, type } = context.query;

  let searchType = type === "image" ? "&searchType=image" : "";

  const req = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query}${searchType}&start=${startIndex}`
  );

  const data = await req.json();

  if (data.error) {
    return {
      redirect: {
        destination: `/api-error?code=${data.error.code}&why=${data.error.errors.reason}`,
        permanent: true,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}
