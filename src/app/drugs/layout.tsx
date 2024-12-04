export default function DrugsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header>
          <h1 className="text-2xl font-bold p-2">Detail Drug Information</h1>
        </header>
        {children}
      </div>
    );
  }
  