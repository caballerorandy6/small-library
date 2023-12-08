import "./globals.css";

export const metadata = {
  title: "Small Library",
  description:
    "Small Library with Next.js, Prisma, PostgreSQL and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
