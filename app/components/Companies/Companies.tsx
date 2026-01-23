"use client";
import Image from "next/image";

// Placeholder company images and names. Replace src as needed.
const companies = [
  {
    name: "Escalantes Restaurant",
    image: "/escalantes.png",
  },
  {
    name: "Greg Olsen Art",
    image: "/gregolsen.png",
  },
  {
    name: "Costa Vida",
    image: "/costavida.png",
  },
  {
    name: "Sky Organics",
    image: "/skyorganics.png",
  },
  {
    name: "Sweet'N Low",
    image: "/sweetnlow.png",
  },
  {
    name: "Purina Innovations",
    image: "/purina.png",
  },
  {
    name: "The Red Headed Hostess",
    image: "/theredheadedhostess.png",
  },
  {
    name: "In The Raw",
    image: "/intheraw.png",
  },
  {
    name: "The Granary Floral",
    image: "/thegranaryfloral.png",
  },
];

import { useRef, useEffect, useState } from "react";

export default function Companies() {
  const [offset, setOffset] = useState(0);
  const [rowWidth, setRowWidth] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const speed = 1; // px per frame

  // Duplicate companies for seamless looping
  const displayCompanies = [...companies, ...companies,...companies, ...companies,...companies, ...companies];

  useEffect(() => {
    if (!rowRef.current) return;
    setRowWidth(rowRef.current.scrollWidth / 2);
  }, [rowRef.current]);

  useEffect(() => {
    let animationFrame: number;
    function animate() {
      setOffset((prev) => {
        if (rowWidth === 0) return prev;
        const next = prev + speed;
        return next >= rowWidth ? 0 : next;
      });
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [rowWidth]);

  return (
    <section id="companies" className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Companies I've Worked With</h2>
      <div
        className="relative w-full overflow-hidden py-4"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        <div
          ref={rowRef}
          className="flex whitespace-nowrap"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: 'none',
            willChange: 'transform',
          }}
        >
          {displayCompanies.map((company, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col items-center justify-center mx-6 min-w-[180px]"
            >
              <Image
                src={company.image}
                alt={company.name}
                width={100}
                height={100}
                className="mb-2 rounded-full object-cover border border-neutral-200 dark:border-neutral-700"
              />
              <span className="font-medium text-lg text-center mt-1">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
