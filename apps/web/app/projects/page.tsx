import Link from "next/link";
import Image from "next/image";
import { Button } from "@repo/ui/components/button";
import { Card, CardContent } from "@repo/ui/components/card";
import { ExternalLink, Calendar } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { fetchProjects } from "@/lib/projectService";
import { format } from "date-fns";
import { CategoryProject } from "@repo/types";

export default async function AllProjectsPage() {
  const projects = await fetchProjects();

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

  return (
    <div className="min-h-screen bg-beige text-black selection:bg-ruby selection:text-beige border-x-12 border-beige max-w-[80%] mx-auto">
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

      <main className="max-w-full mx-auto px-4 md:px-8">
        {/* All Projects Section */}
        <section id="projects" className="mb-16">
          <div className="border-b-[6px] border-black mb-8 pb-3 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h3 className="text-5xl md:text-6xl font-noto font-black uppercase tracking-tight text-black leading-none">
                The Archives
              </h3>
              <p className="font-ibm text-xs font-bold uppercase tracking-widest mt-2 text-ruby">
                A Comprehensive Catalog of Works
              </p>
            </div>
            <div className="font-ibm text-xs font-bold uppercase tracking-widest border-2 border-black px-3 py-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-black inline-block"></span>
              {projects.length} Entries Found
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="rounded-none border-4 border-black bg-beige shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 group flex flex-col h-full"
              >
                {project.thumbnail && (
                  <div className="aspect-4/3 relative border-b-4 border-black bg-black p-1 overflow-hidden">
                    <Image
                      src={project.thumbnail.url || "/placeholder.svg"}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-cover grayscale sm:grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                )}
                <CardContent className="p-6 flex flex-col grow">
                  <div className="border-b-2 border-black pb-4 mb-4">
                    <div className="flex gap-2 font-ibm text-xs font-bold uppercase mb-3">
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
                    <h4 className="text-3xl font-noto font-black uppercase leading-tight line-clamp-2 text-black">
                      {project.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-ibm font-bold uppercase text-black mb-4">
                    <Calendar className="h-4 w-4 text-ruby" />
                    <span>
                      {project.startDate ? format(new Date(project.startDate), "MMM yyyy") : ""}
                      {project.endDate ? " - " + format(new Date(project.endDate), "MMM yyyy") : " - Present"}
                    </span>
                  </div>

                  <p className="font-inter text-sm mb-6 text-black/90 text-justify leading-relaxed grow">
                    {project.description.length > 150 ? project.description.substring(0, 150) + "..." : project.description}
                  </p>

                  <div className="border-t-2 border-black pt-4 mb-6">
                    <p className="font-ibm text-xs font-bold uppercase mb-2">Developed With:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <div
                          key={tech.id}
                          className="flex items-center gap-1 border border-black px-2 py-1 bg-white"
                        >
                          <span className="text-xs font-ibm font-bold text-black uppercase">
                            {tech.technology.name}
                          </span>
                        </div>
                      ))}
                      {project.technologies.length > 5 && (
                        <div className="flex items-center gap-1 border border-black px-2 py-1 bg-black text-beige">
                          <span className="text-xs font-ibm font-bold uppercase">
                            +{project.technologies.length - 5} More
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto font-ibm text-xs">
                    <Button variant="default" className="rounded-none font-bold uppercase border-2 border-black px-4 bg-black text-beige hover:bg-beige hover:text-black transition-colors" asChild>
                      <Link href={`/projects/${project.slug}`}>
                        Read Story
                      </Link>
                    </Button>

                    {project.liveUrl && (
                      <Button variant="ghost" className="rounded-none font-bold uppercase px-2 hover:bg-transparent hover:text-ruby hover:underline underline-offset-4" asChild>
                        <Link href={project.liveUrl} target="_blank" className="text-black">
                          <ExternalLink className="w-4 h-4 mr-1 text-black" /> View Live
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="ghost" className="rounded-none font-bold uppercase px-2 hover:bg-transparent hover:text-ruby hover:underline underline-offset-4" asChild>
                        <Link href={project.githubUrl} target="_blank" className="text-black">
                          <SiGithub className="w-4 h-4 mr-1 text-black" /> Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-8 border-double border-black bg-beige pt-12 pb-6 px-4 md:px-8">
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
