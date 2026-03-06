import Link from "next/link";
import { format } from "date-fns";

export default async function AllBlogsPage() {
  // In the future, fetch blog posts here
  const blogPosts: any[] = [];

  return (
    <div className="min-h-screen bg-beige text-black selection:bg-ruby selection:text-beige border-x-[12px] border-beige max-w-[80%] mx-auto flex flex-col">
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
            <Link href="/projects" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
              Featured Works
            </Link>
            <Link href="/#tech-stack" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
              Tech Stack
            </Link>
            <Link href="/blogs" className="bg-black text-beige px-2 py-1 transition-colors">
              Columns
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-full mx-auto px-4 md:px-8 flex-grow w-full">
        {/* Blog Columns Section */}
        <section id="blogs" className="mb-16 max-w-4xl mx-auto">
          <div className="border-b-[6px] border-black mb-12 pb-4 text-center">
            <span className="font-ibm text-xs font-bold uppercase tracking-widest mb-4 block inline-block border-2 border-black px-2 py-1 text-ruby">
              The Opinion Pages
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-noto font-black uppercase tracking-tight text-black leading-none mb-4">
              Columns &amp; Classifieds
            </h2>
            <p className="font-inter text-lg text-black/80 italic">
              Long-form thoughts on software engineering, web architecture, and digital craftsmanship.
            </p>
          </div>

          <div className="space-y-12">
            {blogPosts.length > 0 ? (
              blogPosts.map((post, index) => (
                <article key={index} className="border-b-4 border-black pb-8 group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <span className="font-ibm text-[10px] md:text-xs font-bold uppercase text-ruby mb-2 block tracking-widest">
                        Published • {format(new Date(), "MMM dd, yyyy")}
                      </span>
                      <span className="font-ibm text-xs font-bold uppercase border-2 border-black px-2 py-1 text-black inline-block">
                        Engineering
                      </span>
                    </div>
                    <div className="md:w-3/4">
                      <Link
                        href={`/blogs`} // Replace with actual slug later
                        className="text-3xl md:text-4xl font-noto font-black uppercase text-black leading-none group-hover:text-ruby transition-colors group-hover:underline underline-offset-4 decoration-4 block mb-4 tracking-tighter"
                      >
                        The Architecture of Modern Web Applications
                      </Link>
                      <p className="font-inter text-base md:text-lg text-stone-800 text-justify leading-relaxed">
                        A comprehensive deep dive into the engineering principles behind this topic and why it matters to you. This is where a preview excerpt of the long-form content would be printed in the column.
                      </p>
                      <Link href="/blogs" className="font-ibm text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 mt-6 inline-block hover:text-ruby hover:border-ruby transition-colors">
                        Read Story &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="py-24 text-center border-[6px] border-double border-black bg-[#EBE7D9] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-6 mx-auto w-16 h-16 border-4 border-black rounded-full flex items-center justify-center font-noto font-black text-3xl">!</div>
                <h3 className="text-3xl md:text-4xl font-noto font-black uppercase text-black tracking-tight mb-4">
                  Printing Press Idle
                </h3>
                <p className="font-inter text-lg mb-6 max-w-md mx-auto italic text-black/80">
                  The editorial team is currently drafting new columns. No articles have been published in this issue yet. Check back soon.
                </p>
                <div className="inline-block p-4 border-4 border-black bg-beige font-ibm uppercase font-bold text-xs tracking-widest text-ruby">
                  Advertising Space Available
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-[8px] border-double border-black bg-beige pt-12 pb-6 px-4 md:px-8 mt-auto">
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
