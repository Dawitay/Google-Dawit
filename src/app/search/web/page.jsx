import Link from 'next/link';

export default async function WebSearchPage({ searchParams }) {
  const term = (await searchParams).searchTerm; // FIX: unwrap promise

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  const totalResults = data?.searchInformation?.totalResults ?? "0";
  const results = data?.items ?? [];

  // THIS is the correct no-results check
  if (totalResults === "0") {
    return (
      <div className="flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">Try searching for something else.</p>
        <Link href="/" className="text-blue-500">Home</Link>
      </div>
    );
  }

  return (
    <>
      {results.map(result => (
        <h1 key={result.link}>{result.title}</h1>
      ))}
    </>
  );
}
