import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseChapters } from "@/components/case/CaseChapters";
import { CaseHero } from "@/components/case/CaseHero";
import { NextProject } from "@/components/case/NextProject";
import { PersonalNote } from "@/components/case/PersonalNote";
import { Contact } from "@/components/home/Contact";
import { caseStudies, getCase } from "@/data/projects";
import { brandFonts } from "./fonts";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getCase(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.cardText,
    openGraph: {
      title: `${project.name} | João Gregório`,
      description: project.cardText,
      url: `/projetos/${project.slug}`,
      images: [project.cover.src],
    },
  };
}

export default async function CasePage({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const project = getCase(slug);
  if (!project) notFound();

  const { theme } = project;
  const vars = {
    "--case-bg": theme.bg,
    "--case-ink": theme.ink,
    "--case-accent": theme.accent,
    "--case-accent-text": theme.accentText,
    "--case-soft": theme.soft,
    "--case-on-accent": theme.onAccent,
  } as React.CSSProperties;

  return (
    <main className="case" style={vars}>
      <CaseHero project={project} />
      <CaseChapters project={project} fonts={brandFonts[project.slug]} />
      <PersonalNote note={project.note} />
      <NextProject current={project.slug} />
      <Contact titulo="Quer esse cuidado no seu negócio também?" />
    </main>
  );
}
