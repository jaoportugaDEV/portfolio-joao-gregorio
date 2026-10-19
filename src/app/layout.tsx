import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth"],
});

const descricao =
  "Sites e sistemas para pequenos negócios. Cada projeto mostra a criação inteira: a ideia, a marca, o código e o porquê de cada escolha.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "João Gregório | Desenvolvedor web",
    template: "%s | João Gregório",
  },
  description: descricao,
  openGraph: {
    title: "João Gregório | Desenvolvedor web",
    description: descricao,
    url: "/",
    siteName: "João Gregório",
    locale: "pt_BR",
    type: "website",
    images: ["/projetos/jane-bolos/site-desktop.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "João Gregório | Desenvolvedor web",
    description: descricao,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${bricolage.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-folha focus:px-4 focus:py-2"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <div id="conteudo" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
