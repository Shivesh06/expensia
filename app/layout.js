import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx"
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
          {/* footer */}
          <footer className="mt-auto py-5">
            {/* Glassmorphic Container */}
            <div className="container mx-auto">
              <div className="backdrop-blur-xl bg-gradient-to-br from-blue-900/30 to-blue-400/20 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-10 md:p-14">
                {/* Top Grid */}
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                  {/* Logo + description */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {/* Logo Container with gradient + glass effect */}
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-xl overflow-hidden">
                        <img
                          src="/logo-r.png"
                          alt="Expensia Logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>

                      {/* App name */}
                      <span className="text-2xl font-bold text-white/95">
                        Expensia
                      </span>
                    </div>

                    <p className="text-sm text-gray-300">
                      Your intelligent partner in building and protecting wealth.
                    </p>
                  </div>

                  {/* Product */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-white/90">
                      Product
                    </h4>
                    <ul className="space-y-2 text-white/70">
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Integrations
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Company */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-white/90">
                      Company
                    </h4>
                    <ul className="space-y-2 text-white/70">
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Press
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Legal */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-white/90">
                      Legal
                    </h4>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Terms of Service
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Cookie Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-white/70">© Shivesh Kumar Dey</p>

                  <div className="flex gap-6 text-sm text-white/70">
                    <a href="#" className="hover:text-white transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
