import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="max-w-3xl max-auto p-4  ml-60">
    <Navbar/>
      <div className="mt-8">{children}</div>
      </div>
      </body>
    </html>
  );
}
