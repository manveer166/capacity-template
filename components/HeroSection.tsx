export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(244,209,192,0.4),transparent)]"></div>
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Turn any idea into a working web app
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Describe your project and let the agent build production‑ready code.  Use this template as a starting point for your own suite of apps.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Build me a dashboard for..."
            className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-200 placeholder-neutral-500"
          />
          <button className="px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
            Go
          </button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Clone Spotify', 'Mood Tracker', 'Crypto Tracker', 'AI Study Buddy', 'Marketing Site'].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm rounded-full transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}