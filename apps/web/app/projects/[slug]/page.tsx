import Link from "next/link";
import Image from "next/image";
import edjsHTML from "editorjs-html";
import { Button } from "@repo/ui/components/button";
import { ExternalLink, Calendar } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { fetchProjects, fetchProjectBySlug } from "@/lib/projectService";
import { CategoryProject } from "@repo/types";
import { format } from "date-fns";

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects
    .filter((project) => !!project.slug)
    .map((project) => ({
      slug: project.slug,
    }));
}

type ProjectPageProps = Promise<{ slug: string }>;

export default async function ProjectDetailPage(props: {
  params: ProjectPageProps;
}) {
  const params = await props.params;
  const project = await fetchProjectBySlug(params.slug);

  function formatCategoryName(category: string): string {
    if (category === "AIML") return "AI/ML";
    return category.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  }

  const categories = [
    { label: "All", value: "all" },
    ...Object.values(CategoryProject).map((value) => ({
      value,
      label: formatCategoryName(value),
    })),
  ];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige border-12 border-black">
        <div className="text-center p-12 border-4 border-black bg-beige shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-6xl font-black font-noto uppercase text-black mb-4 tracking-tighter">
            Record Not Found
          </h1>
          <p className="font-inter text-lg text-black mb-8 italic">
            The architectural blueprint you are looking for has been misplaced or retracted.
          </p>
          <Button className="rounded-none border-2 border-black bg-black text-beige font-ibm uppercase font-bold tracking-widest hover:bg-beige hover:text-black transition-colors" asChild>
            <Link href="/projects">Return to Archives</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Render EditorJS content if available, fallback to description
  const edjsParser = edjsHTML();
  const projectDetailContent =
    project.projectDetail.length > 0 && project.projectDetail[0]?.content
      ? edjsParser.parse(project.projectDetail[0].content)
      : `<p class="first-letter:text-7xl first-letter:font-black first-letter:font-noto first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-ruby text-black/90 font-inter text-lg text-justify leading-relaxed mb-6">${project.description}</p>`;

  return (
    <div className="min-h-screen bg-beige text-black selection:bg-ruby selection:text-beige border-x-[12px] border-beige max-w-[80%] mx-auto">
      {/* Masthead (Header) */}
      <header className="max-w-full mx-auto px-4 md:px-8 pt-8 mb-10 w-full">
        <div className="border-b-[6px] border-black pb-4">
          {/* Top meta bar */}
          <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-6">
            <span className="font-overpass text-xs md:text-sm font-bold uppercase tracking-widest text-ruby">
              Vol. 1 &mdash; Issue No. 1
            </span>
            <span className="font-overpass text-xs md:text-sm font-bold uppercase tracking-widest hidden md:inline">
              {format(new Date(), "MMMM dd, yyyy")}
            </span>
            <span className="font-overpass text-xs md:text-sm font-bold uppercase tracking-widest text-ruby">
              Jakarta, ID
            </span>
          </div>

          {/* Title block */}
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black font-noto uppercase tracking-tighter leading-none text-black">
              Achmad Naufal Ilyasa
            </h1>
            <p className="text-xl md:text-3xl font-inter italic mt-4 font-light text-stone-800">
              The Web Development Inquirer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-sm md:text-base font-ibm uppercase tracking-widest border-t-2 border-b-2 border-black py-4 font-bold">
            <Link href="/#about" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
              Editorial
            </Link>
            <Link href="/projects" className="bg-black text-beige px-2 py-1 transition-colors">
              Featured Works
            </Link>
            <Link href="/#tech-stack" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
              Tech Stack
            </Link>
            <Link href="/blogs" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
              Columns
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-full mx-auto px-4 md:px-8 pb-16">
        {/* Project Back Link & Badge */}
        <div className="flex justify-between items-center mb-8 border-b-2 border-black pb-4">
          <Link
            href="/projects"
            className="group flex items-center font-ibm text-xs uppercase font-bold tracking-widest hover:text-ruby transition-colors"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Archives
          </Link>
          <div className="flex gap-2 font-ibm text-xs font-bold uppercase">
            <span className="bg-black text-beige px-2 py-1">
              {categories.find(c => c.value === project.category)?.label || project.category}
            </span>
            {project.featured && (
              <span className="border-2 border-ruby text-ruby px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-ruby rounded-full animate-pulse"></span>
                Hot
              </span>
            )}
          </div>
        </div>

        {/* Project Detail Header */}
        <div className="mb-10 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black font-noto uppercase leading-none tracking-tight text-black mb-6">
            {project.title}
          </h2>
          <div className="flex justify-center flex-wrap items-center gap-x-6 gap-y-2 text-sm font-ibm font-bold uppercase tracking-widest text-black border-y-2 border-black py-2">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-ruby" />
              Start: {new Date(project.startDate).toLocaleDateString()}
            </span>
            <span className="hidden md:inline text-ruby">&bull;</span>
            <span className="flex items-center gap-2">
              {project.endDate ? `End: ${new Date(project.endDate).toLocaleDateString()}` : `Status: Active / Ongoing`}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">

          {/* Main Editorial Content */}
          <article className="lg:col-span-8">
            {project.thumbnail && (
              <div className="relative w-full aspect-video border-[6px] border-black bg-black p-1 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src={project.thumbnail.url || "/placeholder.svg"}
                  alt={`${project.title} thumbnail`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            )}

            {/* Links and Actions (Mobile block, injected under photo) */}
            <div className="flex flex-wrap gap-4 mb-8 font-ibm text-xs font-bold uppercase lg:hidden border-b-2 border-black pb-6">
              {project.liveUrl && (
                <Button variant="outline" className="border-2 border-black rounded-none tracking-wider hover:bg-black hover:text-ruby text-beige bg-black focus:ring-0 transition-none flex-grow" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Deployment
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" className="border-2 border-black rounded-none tracking-wider hover:bg-black hover:text-beige text-black focus:ring-0 transition-none flex-grow" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <SiGithub className="w-4 h-4 mr-2" />
                    Source Code
                  </Link>
                </Button>
              )}
            </div>

            {/* Structured Content Box */}
            <div
              className="prose prose-stone prose-lg max-w-none text-black/90 font-inter text-justify leading-relaxed prose-headings:font-noto prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:border-b-2 prose-headings:border-black prose-headings:pb-2 prose-a:text-ruby prose-a:underline-offset-4 prose-a:font-bold prose-strong:font-black prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:bg-beige/50 prose-blockquote:font-ibm prose-blockquote:text-sm prose-blockquote:uppercase prose-blockquote:font-bold prose-img:border-4 prose-img:border-black"
              // Add retro styling to raw HTML output
              dangerouslySetInnerHTML={{
                __html: Array.isArray(projectDetailContent) ? projectDetailContent.join('') : projectDetailContent
              }}
            />
          </article>

          {/* Sidebar / Pull-Quotes */}
          <aside className="lg:col-span-4 space-y-8">

            {/* Action Box (Desktop via Sidebar) */}
            <div className="hidden lg:block border-[6px] border-double border-black p-6 bg-[#EBE7D9]">
              <h3 className="font-noto font-black text-2xl uppercase tracking-tight mb-4 border-b-2 border-black pb-2">
                External Links
              </h3>
              <div className="flex flex-col gap-3 font-ibm text-xs font-bold uppercase">
                {project.liveUrl && (
                  <Button variant="outline" className="w-full border-2 border-black rounded-none tracking-widest hover:bg-black hover:text-ruby text-beige bg-black transition-none justify-start px-4 h-12" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-3" />
                      Live Deployment
                    </Link>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" className="w-full border-2 border-black rounded-none tracking-widest hover:bg-black hover:text-beige text-black transition-none justify-start px-4 h-12" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <SiGithub className="w-4 h-4 mr-3" />
                      Source Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Technologies Box */}
            <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-noto font-black text-2xl uppercase tracking-tight mb-4 border-b-[4px] border-black pb-2 text-black flex items-center justify-between">
                <span>Infrastructure</span>
                <span className="text-sm font-ibm tracking-widest text-ruby">Tools</span>
              </h3>
              <ul className="space-y-3 font-inter text-sm">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white group-hover:bg-black transition-colors p-1">
                      {tech.technology.iconUrl && (
                        <Image src={tech.technology.iconUrl} alt={tech.technology.name} width={20} height={20} className="group-hover:invert transition-all" />
                      )}
                    </div>
                    <span className="font-bold border-b border-dotted border-black/30 flex-grow pb-1 group-hover:border-black transition-colors uppercase tracking-wide">
                      {tech.technology.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-[8px] border-double border-black bg-beige pt-12 pb-6 px-4 md:px-8">
        <div className="max-w-full mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 border-b-4 border-black pb-12">

            <div className="lg:col-span-1">
              <h4 className="font-noto font-black text-3xl uppercase tracking-tighter mb-4">A. Naufal</h4>
              <p className="font-inter text-sm mb-6 leading-relaxed text-black/80 font-medium">
                Distributed worldwide. Providing cutting-edge web engineering and architectural solutions. Printed with digital ink.
              </p>
              <p className="font-ibm text-xs uppercase font-bold tracking-widest text-ruby">
                EST. 2025
              </p>
            </div>

            <div>
              <h5 className="font-ibm font-black uppercase text-sm mb-6 border-b-2 border-black pb-2 tracking-widest">
                Sections
              </h5>
              <div className="flex flex-col space-y-3 font-inter font-bold text-sm uppercase">
                <Link href="/#about" className="hover:text-ruby hover:pl-2 transition-all flex items-center gap-2">
                  <span className="w-2 h-2 bg-black inline-block"></span> Editorial
                </Link>
                <Link href="/projects" className="hover:text-ruby hover:pl-2 transition-all flex items-center gap-2">
                  <span className="w-2 h-2 bg-black inline-block"></span> Features
                </Link>
                <Link href="/blogs" className="hover:text-ruby hover:pl-2 transition-all flex items-center gap-2">
                  <span className="w-2 h-2 bg-black inline-block"></span> Classifieds
                </Link>
              </div>
            </div>

            <div>
              <h5 className="font-ibm font-black uppercase text-sm mb-6 border-b-2 border-black pb-2 tracking-widest">
                Wire Services
              </h5>
              <div className="flex flex-col space-y-3 font-inter font-bold text-sm uppercase">
                <Link href="mailto:naufal.ilyasa7@gmail.com" className="hover:text-ruby hover:underline underline-offset-4 decoration-2">
                  Telegraph (Email)
                </Link>
                <Link href="https://linkedin.com/in/naufalilyasa" className="hover:text-ruby hover:underline underline-offset-4 decoration-2">
                  Professional Network
                </Link>
                <Link href="https://github.com/naufalilyasa" className="hover:text-ruby hover:underline underline-offset-4 decoration-2">
                  Code Repository
                </Link>
              </div>
            </div>

            <div>
              <h5 className="font-ibm font-black uppercase text-sm mb-6 border-b-2 border-black pb-2 tracking-widest">
                Publishing Office
              </h5>
              <div className="font-ibm text-xs font-bold uppercase leading-relaxed text-stone-800">
                <p>East Jakarta,</p>
                <p>DKI Jakarta Province</p>
                <p className="text-black font-black mt-2">Republic of Indonesia</p>
              </div>
            </div>

          </div>

          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-ibm text-xs font-bold uppercase tracking-widest">
            <p>&copy; 2025 ACHMAD NAUFAL ILYASA.</p>
            <p>All Rights Reserved. <span className="text-ruby ml-2 text-[10px]">■ VOL 1.</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
