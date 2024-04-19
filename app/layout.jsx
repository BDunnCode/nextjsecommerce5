import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: `%s | TechHouse`,
    default: 'TechHouse',  
  },
  description: "Cutting Edge Tech",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
};