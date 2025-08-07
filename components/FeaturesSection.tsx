export default function FeaturesSection() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-3xl p-6 shadow-lg h-full flex items-center justify-center">
          {/* Placeholder image or illustration */}
          <div className="w-full h-64 md:h-80 flex items-center justify-center bg-neutral-800 rounded-2xl border border-neutral-700">
            <span className="text-neutral-500">App preview</span>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">Meet Agent Mode</h2>
          <p className="text-neutral-400 mb-6">
            Our agent can build apps of any complexity — it reasons through
            problems, understands context, executes commands and fixes bugs
            automatically.  Highlight your own app features here.
          </p>
          <ul className="space-y-4">
            {[
              {
                title: 'Smarter Code Edits',
                desc: 'Global understanding of your codebase for precise edits.',
              },
              {
                title: '90% fewer errors',
                desc: 'Less likely to break code thanks to advanced reasoning.',
              },
              {
                title: 'Adaptive Pricing',
                desc: 'Pay based on actions, not messages.  Describe your own pricing model here.',
              },
            ].map(({ title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="mt-1 text-primary-500">•</span>
                <div>
                  <h4 className="text-lg font-semibold">{title}</h4>
                  <p className="text-neutral-400">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-4">
            <button className="px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
              Watch Demo
            </button>
            <button className="px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}