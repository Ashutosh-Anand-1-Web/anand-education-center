import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anandeducationcenter.in"),
  title: "Anand Education Center | Bidupur, Vaishali, Bihar",
  description:
    "Anand Education Center is a disciplined competitive-examination preparation institute in Bidupur, Vaishali, Bihar. Guiding aspirants for UPSC, BPSC, SSC, Railway, and Banking.",
  keywords: [
    "Anand Education Center",
    "Bidupur",
    "Vaishali",
    "Bihar",
    "UPSC",
    "BPSC",
    "SSC",
    "Railway",
    "Banking",
    "Competitive Examination Coaching",
  ],
  authors: [{ name: "Anand Education Center" }],
  openGraph: {
    title: "Anand Education Center | Bidupur, Vaishali, Bihar",
    description:
      "Disciplined preparation for competitive examinations in Bidupur, Vaishali, Bihar. Mentoring for UPSC, BPSC, SSC, Railway, and Banking.",
    siteName: "Anand Education Center",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/logo/anand-education-center-logo.png",
        width: 1024,
        height: 512,
        alt: "Anand Education Center Logo",
      },
    ],
  },
  icons: {
    icon: "/assets/logo/anand-education-center-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1F3A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] antialiased flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
