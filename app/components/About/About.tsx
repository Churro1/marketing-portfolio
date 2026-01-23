"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center md:items-start md:gap-0 mt-8 md:mt-16">
      <div className="md:pl-8 md:pr-0 w-full md:w-auto flex justify-center md:justify-start">
        <Image
          src="/climbing.JPG"
          alt="Charlie Miner About"
          width={220}
          height={220}
          className="rounded-xl shadow-md hover-grow"
        />
      </div>
      <div className="flex-1 text-center md:text-left md:pl-8">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="mb-2">
          I’ve always been driven by the challenge of building things from the ground up—whether that’s a complex Python application, a custom-coded website, or a high-performing digital marketing campaign. I am currently a Computer Science student at USU (Senior) and a Media Buyer at Molio Inc. for the past 3.5 years, I thrive at the intersection of logic and creativity. 
        </p>
        <p className="mb-2">
          My background in software development allows me to look at marketing through a technical lens, finding efficient, data-backed solutions where others might see roadblocks. From managing complex ad spends to building custom web tools, I’m focused on bridging the gap between technical execution and growth strategy.
        </p>
        <ul className="list-disc list-inside text-left mx-auto md:mx-0 max-w-md">
          <li>SEO & SEM</li>
          <li>Social Media Marketing</li>
          <li>Analytics & Reporting</li>
        </ul>
      </div>
    </section>
  );
}
