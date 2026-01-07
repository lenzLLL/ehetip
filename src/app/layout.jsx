import './global.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QueryProvider from "../components/QueryProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:inline-block focus:top-4 focus:left-4 focus:absolute focus:bg-white focus:text-[var(--primary-blue)] focus:px-3 focus:py-2 focus:rounded" aria-label="Aller au contenu">
          Aller au contenu
        </a>
        <QueryProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-grow">{children}</main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
