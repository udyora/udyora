"use client";
import dynamic from "next/dynamic";

const ProjectsContent = dynamic(() => import("./projects-content"), {
  ssr: false,
  loading: () => (
    <section className="container pt-16 lg:pt-24 scroll-mt-10 overflow-hidden">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-4 w-24 animate-pulse rounded-full bg-white/10" />
        <div className="h-10 w-56 animate-pulse rounded-md bg-white/10" />
        <div className="h-4 w-full max-w-md animate-pulse rounded-md bg-white/5" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-full rounded-md border border-white/10 overflow-hidden bg-white/2 flex flex-col items-center text-center"
          >
            <div className="w-full aspect-4/2 animate-pulse bg-white/5 border border-white/10" />

            <div className="flex flex-col items-center justify-between grow w-full">
              <div className="p-6 pb-2 border-b border-white/30 w-full flex justify-center">
                <div className="h-6 w-3/4 animate-pulse rounded-md bg-white/10" />
              </div>

              <div className="p-6 w-full flex flex-col items-center gap-3">
                <div className="flex flex-wrap justify-center gap-2">
                  <div className="h-6 w-32 animate-pulse rounded-full bg-white/5" />
                  <div className="h-6 w-28 animate-pulse rounded-full bg-white/5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 md:mt-8 flex items-center justify-center gap-6">
        <div className="h-10 w-10 animate-pulse rounded-full bg-white/5" />
        <div className="h-4 w-12 animate-pulse rounded-md bg-white/5" />
        <div className="h-10 w-10 animate-pulse rounded-full bg-white/5" />
      </div>
    </section>
  ),
});

export default function Projects() {
  return <ProjectsContent />;
}
