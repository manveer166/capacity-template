interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"I\'ve tried numerous no‑code tools, but this platform is different. It actually understands what I\'m trying to build and generates production‑ready code."',
    author: 'Jane Doe',
    role: 'Founder, ExampleCo',
  },
  {
    quote:
      '"From idea to MVP in 48 hours. This template is a game‑changer for rapid prototyping and validation."',
    author: 'John Smith',
    role: 'Technical Lead, StartupX',
  },
  {
    quote:
      '"The AI agent helps me build apps faster than ever. The flexibility to export code is invaluable."',
    author: 'Alex Johnson',
    role: 'Product Manager, InnovateInc',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-neutral-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">What Users Say</h2>
      <div className="max-w-6xl mx-auto px-4 flex gap-6 overflow-x-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-600 rounded-2xl p-6 flex-shrink-0 shadow-lg"
          >
            <p className="text-lg italic mb-4">{t.quote}</p>
            <p className="font-semibold">{t.author}</p>
            <p className="text-sm text-neutral-400">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}