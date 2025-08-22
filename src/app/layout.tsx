import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// load roboto with normal (non-italic) styles
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // pick what you use
  style: ["normal"], // 👈 ensures no italic
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "My App",
  description: "Using Roboto font",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
