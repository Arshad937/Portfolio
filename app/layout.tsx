import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arshad Mustafa — Senior iOS Engineer",
  description:
    "Portfolio of Arshad Mustafa, a Senior iOS Engineer building polished and scalable iPhone and iPad applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
