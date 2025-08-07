import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="text-xl font-semibold text-white flex items-center gap-1">
              <span className="text-primary-500">*</span> Capacity
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/affiliate" className="hover:text-white transition-colors">Affiliate Program</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/signin" className="hidden sm:inline-block text-sm px-4 py-2 text-neutral-300 hover:text-white transition-colors">Sign in</Link>
          <Link href="/get-started" className="bg-primary-600 hover:bg-primary-700 text-white text-sm px-4 py-2 rounded-full transition-colors">Get Started</Link>
        </div>
      </div>
    </header>
  );
}