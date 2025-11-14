import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Google Dawit",
  description: "Search Engine created by Dawit Ayele",
  icons: {
    icon: "/google.svg", // Path to your favicon in the public folder
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}>
        {children}

        {/* Footer */}
        <Footer/>
      </body>
    </html>
  );
}