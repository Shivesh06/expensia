import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "Expensia",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* header */}
        {children}
        {/* footer */}
      </body>
    </html>
  );
}
