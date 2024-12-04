import Link from "next/link";
import data from "/public/druginfostore";
import { Metadata } from "next";
import { ChangeEvent, useMemo, useState } from "react";
import Search from "@/components/Search";

type Drug = {
  id: number;
  
  genericName: string;
  indications: string;
};

async function fetchDrugs(): Promise<Drug[]> {
  return data.map((dat: [], idx: number) => ({
    id: idx,
    genericName: dat[0],//actually 0 index is generic nanme
    indications: dat[2],
  }));
  return [
    { id: 1, brandName: "Paracetamol", genericName: "Acetaminophen" },
    { id: 2, brandName: "Ibuprofen", genericName: "Ibuprofen" },
    { id: 3, brandName: "Amoxicillin", genericName: "Amoxicillin" },
  ];
}

export default async function HomePage() {
  const drugs = await fetchDrugs();

  return (
    <main className="min-h-screen bg-gray-200 p-6 ">
      <div className="max-w-5xl mx-auto ">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Drug Database</h1>
          <p className="mt-2 text-gray-600">
            Comprehensive drug information at your fingertips.
          </p>
        </header>
       <Search drugs={drugs}></Search>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {drugs.map((drug) => (
            <Link key={drug.id} href={`/drugs/${drug.id}`}>
              <div className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-800">
                  {drug.genericName}
                </h2>
                <p className="text-gray-500 mt-1">{drug.indications}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
