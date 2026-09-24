import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arshad Mustafa — Senior iOS Engineer",
  description:
    "Portfolio of Arshad Mustafa, a Senior iOS Engineer specializing in Swift, SwiftUI, UIKit, MVVM, Core ML, and modern iOS development.",
  keywords: [
    "Arshad Mustafa",
    "Senior iOS Engineer",
    "iOS Developer",
    "Swift",
    "SwiftUI",
    "UIKit",
    "MVVM",
    "iOS Development",
  ],
  authors: [
    {
      name: "Arshad Mustafa",
    },
  ],
  creator: "Arshad Mustafa",
  openGraph: {
    title: "Arshad Mustafa — Senior iOS Engineer",
    description:
      "Senior iOS Engineer building polished, scalable, and user-centric iOS applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshad Mustafa — Senior iOS Engineer",
    description:
      "Senior iOS Engineer building polished and scalable iOS applications.",
  },
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
