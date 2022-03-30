import { useRouter } from "next/router";
import Head from "next/head";
import SearchHeader from "../components/Search/Header";

export default function Search() {
  const router = useRouter();
  const { query } = router.query;

  return (
    <>
      <Head>
        <title>Searching for {query}</title>
      </Head>
      <SearchHeader passedQuery={query} />
    </>
  );
}
