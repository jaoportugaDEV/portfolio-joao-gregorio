import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joao Gregorio | Full Stack Junior",
  description:
    "Portfolio de Joao Gregorio com foco em desenvolvimento full stack, automacoes e IA aplicada.",
  openGraph: {
    title: "Joao Gregorio | Full Stack Junior",
    description:
      "Desenvolvedor Full Stack Junior focado em IA aplicada, automacoes e sistemas web.",
    url: "https://portfolio-joao-gregorio.vercel.app",
    siteName: "Joao Gregorio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Joao Gregorio | Full Stack Junior",
    description:
      "Desenvolvedor Full Stack Junior focado em IA aplicada, automacoes e sistemas web.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
