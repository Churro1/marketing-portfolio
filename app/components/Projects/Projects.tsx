"use client";
import Image from "next/image";

const projects = [
    {
    title: "Costa Vida",
    description:
      "Costa Vida was one of my first campaigns. The small team I worked with ran ads and reported on platforms including Meta, TikTok, Broadcast TV, YouTube,  DOOH, DSP, Hulu and more. This campaign taught me how to build media plans, analyze data, and report to clients both in person and over video conference call. It also taught me the importance of building a media plan that aligns with the company goals and objectives. We managed a budget of about $300,000 per quarter and drove a 4x ROAS.",
    images: ["/costavida.jpg"],
  },
  {
    title: "Cumberland Packing",
    description:
      "Cumberland Packing is the largest client I have worked with to date. I began as being a support for my supervisor as she managed ads for many of their In the Raw products. We later received work for Sweet’N Low. In 2025 I ran their Google Search Campaigns, navigating external roadblocks such as tariffs and new medical research papers that directly affected many products. I managed a yearly budget of $1,000,000 across the full family of brands. ",
    images: ["/itr.jpg", "/snl.jpg"],
  },
  {
    title: "Purina Innovations",
    description:
      "Innovation products at Purina have been my bread and butter for the last year and a half. I have helped build media plans, set up entire campaigns (Meta and Google), implemented tracking pixels, made daily, weekly, and monthly optimizations, and reported weekly to the client. These projects are small start-up ideas that Purina is testing before launching in their main line. Two products I supported are now mainline offerings within the Petivity line.",
    images: ["/ora.jpg", "/kidney.jpg"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold mb-6 text-center">Case Studies</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-4 flex flex-col items-center hover-grow"
          >
            <div className="flex flex-col gap-2 w-full">
              {(project.images || []).map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={project.title + ' image ' + (i + 1)}
                  width={320}
                  height={200}
                  className="rounded-md mb-4 hover-grow"
                />
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-base">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
