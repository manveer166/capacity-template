import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Add padding-top equal to header height to prevent content from being hidden */}
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}