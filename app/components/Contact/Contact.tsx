"use client";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center text-center gap-4">
      <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
      <p className="mb-2">Let’s connect! Reach out via phone or email:</p>
      <div className="flex flex-col gap-2">
        <a
          href="tel:+18015977911"
          className="text-lg font-medium underline hover:text-blue-600"
        >
          +1 (801) 597-7911
        </a>
        <a
          href="mailto:charliejminer@gmail.com"
          className="text-lg font-medium underline hover:text-blue-600"
        >
          charliejminer@gmail.com
        </a>
        <div>También hablo español</div>
      </div>
    </section>
  );
}
