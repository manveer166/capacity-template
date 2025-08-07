interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What can I build with this template?',
    answer:
      'You can build full‑stack web apps, landing pages, internal tools, and MVPs — all powered by AI or your own logic. Use it as a starting point and extend it to fit your needs.',
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'Not necessarily. This template is built for makers of all backgrounds. You can describe your project in plain English and connect to AI tools, or dive in and customise anything if you\'re a developer.',
  },
  {
    question: 'Is the code exportable?',
    answer:
      'Yes — you have full access to the generated code. You can export it, self‑host it, or continue working locally using your preferred tools and frameworks.',
  },
  {
    question: 'Can I collaborate with others?',
    answer:
      'Absolutely. Invite collaborators to your projects, share progress, and even hand off to developers or clients — all in one place.',
  },
];

export default function FaqSection() {
  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="bg-neutral-800 rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-neutral-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}