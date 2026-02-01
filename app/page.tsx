export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
      <main className="container mx-auto px-6 py-20 max-w-4xl">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-6xl font-bold mb-6 text-zinc-900 dark:text-zinc-50 tracking-tight">
              Ryen
            </h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight text-zinc-800 dark:text-zinc-200 mb-8">
            I&apos;m Ryen, a senior product designer at American Airlines.
          </h1>
        </section>

        {/* Location Card */}
        <section className="mt-12">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <svg 
                className="w-6 h-6 text-zinc-600 dark:text-zinc-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Current Location
              </h3>
            </div>
            <p className="text-2xl text-zinc-700 dark:text-zinc-300 font-medium">
              Dallas-Fort Worth, Texas
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
