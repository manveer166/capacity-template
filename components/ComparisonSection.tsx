export default function ComparisonSection() {
  const ourAdvantages = [
    'True Agentic Coding: AI agents understand context and make intelligent decisions across your entire codebase.',
    'Multi‑File Refactoring: Seamlessly refactor across multiple files with full dependency tracking.',
    'Fewer Errors: More reliable code and automatic bug fixes.',
    'Advanced Context Awareness: Deep understanding of your project structure, patterns and conventions.',
    'Seamless Integration: Works with other tools and workflows.',
  ];
  const competitors = [
    'Basic Code Templates: Simple generation without understanding project context.',
    'Many back and forths: Multiple iterations to get the code right.',
    'Single File Focus: Limited to one file at a time without cross‑file awareness.',
    'Static Suggestions: Pre‑built suggestions that don\'t adapt to your needs.',
    'Generic Output: One‑size‑fits‑all code that doesn\'t match your style.',
  ];
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Our Platform?</h2>
        <p className="text-neutral-400 text-center mb-12">
          See how agentic coding stacks up against traditional tools.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary-500">*</span> Our Platform
            </h3>
            <ul className="space-y-3">
              {ourAdvantages.map((adv) => (
                <li key={adv} className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">✔</span>
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Other Tools
            </h3>
            <ul className="space-y-3">
              {competitors.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}