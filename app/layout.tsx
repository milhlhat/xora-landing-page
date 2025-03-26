import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--inter",
  subsets: ["latin"],
});
const poppinsFont = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "XORA",
  description: "Xora Nextjs TailwindcssV4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${poppinsFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
