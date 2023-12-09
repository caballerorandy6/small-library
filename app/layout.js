//CSS
import "./globals.css";

//Fonts
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: "Small Library",
  description:
    "Small Library with Next.js, Prisma, PostgreSQL and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-woodsmoke">{children}</body>
    </html>
  );
}
