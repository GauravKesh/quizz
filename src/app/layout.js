import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layouts/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Micro-Quiz Platform',
  description: 'Take short topic-specific quizzes and test your knowledge.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
      <Navbar/>
      {children}
      </body>
    </html>
  );
}






