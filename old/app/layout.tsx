import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layouts/Header/";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Conf Africa",
  description: "First of it's kind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <footer>Footer here</footer>
      </body>
    </html>
  );
}
