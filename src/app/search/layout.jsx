
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";

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

export default function SearchLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <SearchHeader />
      {children}
    </div>
  );
}
