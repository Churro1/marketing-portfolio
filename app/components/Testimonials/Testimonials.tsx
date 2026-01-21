"use client";
import Image from "next/image";


const tools = [
  {
    title: "Advertising Platforms",
    items: [
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "YouTube Ads",
      "Broadcast TV, DOOH, DSP, Hulu, and more",
    ],
  },
  {
    title: "Analytics & Reporting",
    items: [
      "Google Analytics",
      "Meta Business Suite",
      "Google Tag Manager",
      "Excel/Sheets Reporting",
      "Custom Dashboards",
    ],
  },
  {
    title: "Creative & Management Tools",
    items: [
      "Canva",
      "Adobe Creative Suite",
      "Slack & Teams",
      "Trello & Asana",
      "Meta Business Manager",
    ],
  },
];

export default function ToolsUsed() {
  return (
    <section id="tools" className="my-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Tools I Use</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 flex-1 min-w-[220px] hover-grow"
          >
            <h3 className="text-xl font-bold mb-3 text-center">{tool.title}</h3>
            <ul className="list-disc list-inside text-left mx-auto max-w-xs">
              {tool.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
