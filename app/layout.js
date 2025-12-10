import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expensia",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          {/* header */}
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
