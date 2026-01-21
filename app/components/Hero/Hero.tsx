"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center text-center gap-6 mt-12 md:mt-20">
      <Image
        src="/headshot.png"
        alt="Charlie Miner Hero"
        width={240}
        height={240}
        className="rounded-full shadow-lg hover-grow"
        priority
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Charlie Miner</h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-xl">
        Digital Marketing Specialist
      </p>
    </section>
  );
}
