import type { Metadata } from "next";
import "./styles/globals.css";
import { inter } from "./utils/fonts";

export const metadata: Metadata = {
  title: {
    default: "StellarSTEM",
    template: "%s | StellarSTEM"
  },
  description: "A platform for STEM education and resources",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
