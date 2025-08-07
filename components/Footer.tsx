import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 mt-16 pt-12 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-white mb-3">Product</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white">Changelog</Link></li>
            <li><Link href="#" className="hover:text-white">Roadmap</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="#" className="hover:text-white">Support</Link></li>
            <li><Link href="#" className="hover:text-white">About</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white">Tools</Link></li>
            <li><Link href="/learn" className="hover:text-white">Learn</Link></li>
            <li><Link href="#" className="hover:text-white">Discord</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white">Blog</Link></li>
            <li><Link href="#" className="hover:text-white">Contact</Link></li>
            <li><Link href="/affiliate" className="hover:text-white">Affiliate</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white">Privacy</Link></li>
            <li><Link href="#" className="hover:text-white">Terms</Link></li>
            <li><Link href="#" className="hover:text-white">Report Abuse</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-white font-semibold text-xl mb-4 sm:mb-0 flex items-center gap-1">
          <span className="text-primary-500">*</span> Capacity
        </div>
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}