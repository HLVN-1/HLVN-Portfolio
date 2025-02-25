export default function ProjectsPage() {
  return (
    <div>
      <section
        id="hero"
        className="h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white flex flex-col justify-center items-center text-center"
      >
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <header className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold">Projects</h1>
              <p className="text-gray-300 mt-2">
                Here are some of the projects I&apos;ve worked on!
              </p>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold">
                  <a href="https://maintenance-form-app.vercel.app/">
                    Maintenance Form
                  </a>
                </h2>
                <p className="text-gray-600 mt-2">
                  A form to submit maintenance requests.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold">
                  <a href="https://hlvn-1.github.io/5minjournal/">
                    5 Minute Journal
                  </a>
                </h2>
                <p className="text-gray-600 mt-2">
                  A daily journal to write in.
                </p>
              </div>
              {/* <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold">Coffee Cafe Website</h2>
                <p className="text-gray-600 mt-2">A Coffee Shop website.</p>
              </div> */}
              <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold">
                  <a href="https://random-joke-fetcher.vercel.app/">
                    Dad Jokes Randomizer
                  </a>
                </h2>
                <p className="text-gray-600 mt-2">
                  A random joke fetcher created with JS, Playwright, and an API.
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
