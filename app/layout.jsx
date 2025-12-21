import './global.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QueryProvider from "../components/QueryProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <QueryProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
