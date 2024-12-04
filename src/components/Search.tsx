"use client";

import Link from "next/link";
import { useState, useMemo, ChangeEvent } from "react";

type Drug = {
    id: number;
    
    genericName: string;
    indications: string;
  };
type SearchProps = {
  drugs: Drug[];
};

export default function Search({ drugs }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");

  // Filtering drugs based on the search term
  const filteredDrugs = useMemo(
    () =>
      drugs.filter((drug) =>
        drug.genericName.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue, drugs]
  );

  // Handler for the search input change
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <input
        placeholder="Search medicine here"
        type="search"
        value={searchValue}
        onChange={handleSearch}
        className="flex w-full py-3 px-2 border-gray-400 border-2 rounded-lg"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredDrugs.map((drug) => (
          <Link href={`/drugs/${drug.id}`} key={drug.id} className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800">
              {drug.genericName}
            </h2>
            <p className="text-gray-500 mt-1">{drug.indications}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
