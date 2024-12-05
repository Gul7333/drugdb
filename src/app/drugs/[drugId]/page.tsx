
import { Metadata } from "next";
import data from "../../../../public/druginfostore.json"
import Link from "next/link";



type Drug = {
  id: number;
  brandName: string;
  genericName: string;
  overview: string;
  indication: string;
  contraindication: string;
  sideEffects: string;
  precautions: string;
};

interface DrugPageProps {
    params: Promise<{
      drugId: string;
    }>;
  }

async function fetchDrug(drugId: string): Promise<Drug> {


  const drug = data[parseInt(drugId)]
  return  {
    id: parseInt(drugId),
    brandName: drug[0],
    genericName: drug[0],
    overview: drug[1],
    indication: drug[2],
    sideEffects: drug[3],
    contraindication: drug[4],
    precautions: drug[5],
  };

}


export async function generateStaticParams() {
  // Get all drug IDs from your data
  const ids = Object.keys(data).map((id) => ({ drugId: id }));
  return ids; // [{ drugId: '1' }, { drugId: '2' }, ...]
}

export async function generateMetadata({ params }: DrugPageProps): Promise<Metadata> {
  const id = (await params).drugId
  const drug : Drug =  await fetchDrug(id);
  return {
    title: drug ? `${drug.brandName} (${drug.genericName}) - Drug Information` : 'Drug Not Found',
    description: drug ? drug.overview : 'Detailed drug information.',
  };
}

export default async function DrugPage({ params }) {
  const drug = await fetchDrug(params.drugId);

  if (!drug) {
    return <p>Drug not found.</p>;
  }

  return (
    <main className='max-w-5xl'>
      <h1 className='text-2xl font-bold'>{drug.brandName} ({drug.genericName})</h1>
      <section>
        <h2 className='text-lg font-semibold'>Overview of {drug.genericName}</h2>
        <p>{drug.overview}</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold'>Indication of {drug.genericName} </h2>
        <p>{drug.indication}</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold'>Contraindication of {drug.genericName}</h2>
        <p>{drug.contraindication}</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold'>Side Effects of {drug.genericName}</h2>
        <p>{drug.sideEffects}</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold'>Precautions of {drug.genericName}</h2>
        <p>{drug.precautions}</p>
      </section>
      <div className="flex w-full flex-row justify-between mt-3">
        <Link className="px-5 py-2 bg-gray-200 shadow-md" href={`/drugs/${parseInt(params.drugId) - 1}`} >Back</Link>
        <Link className="px-5 py-2 bg-gray-200 shadow-md" href={`/drugs/${parseInt(params.drugId) + 1}`} >Forword</Link>
      </div>
    </main>
  );
}
