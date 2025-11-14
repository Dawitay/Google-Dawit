"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import Image from 'next/image';

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch(e) {
    setRandomSearchLoading(true);

    try {
      const res = await fetch("https://random-word-api.vercel.app/api?words=1");
      const data = await res.json();
      const word = data[0];

      if (!word) return;

      router.push(`/search/web?searchTerm=${word}`);
    } catch (err) {
      console.error("Random search error:", err);
    } finally {
      setRandomSearchLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none rounded-full"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsMicFill className="text-lg" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>

        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center"
        >
          {randomSearchLoading ? (
            <Image
              width={24}
              height={24}
              src="/spinner.svg"
              alt="loading..."
              className="h-6 w-6 disabled:opacity-80"
            />
          ) : (
            "I Am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
