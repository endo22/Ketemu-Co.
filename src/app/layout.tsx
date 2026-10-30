import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import { DemoSiteBanner } from "@/components/demo/DemoSiteBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KETEMU & Co.",
    template: "%s · KETEMU & Co.",
  },
  description: "Website resmi KETEMU & Co.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${archivo.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="absolute left-4 top-[-5rem] z-[100] bg-navy-800 px-4 py-3 font-sans text-sm font-medium text-white outline-none transition-[top] focus:top-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-navy-600"
        >
          Lewati ke konten utama
        </a>
        <DemoSiteBanner />
        <Header />
        <main id="main" tabIndex={-1} className="flex flex-1 flex-col outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
