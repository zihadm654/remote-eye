import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">About</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Remote Eye, Your Personal Security Companion.
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          Remote Eye was established in 2020 by a team of enthusiastic IT
          professionals aiming to surpass the local market and meet the global
          demand for IT-enabled services. With this vision, Remote Eye began its
          journey, focusing on serving businesses and individual entrepreneurs
          in North America. In a short span, Remote Eye has earned a reputation
          as a reliable service provider through to its great team work,
          dedication, and exceptional customer service. The company prides
          itself on offering fully customized solutions, attentive care, and
          innovation. Remote Eye stands out among other BPO providers both
          locally and internationally due to it's strong core values and
          professionalism. Remote Eye is also well-regarded in the local
          corporate market for its commitment to employee welfare. Unlike many
          employers who demand long hours with minimal pay and benefits, Remote
          Eye is a model ITES company that values each employee equally and
          recognizes their contributions. The company has an "Exclusive Employee
          Benefit Scheme" for long-term employees. Remote Eye offers it's staff
          opportunities to demonstrate their abilities through innovation and
          creativity, maintaining an excellent work environment. Multiple
          directors of the company reside in North America to boost it’s sales
          and marketing operations in the target market to ensure consistent
          revenue stream. The Remote Eye team takes pride in generating
          recurring revenues as 100% foreign remittance for Bangladesh. Remote
          Eye also has full-time employees and associates working in United
          States, Canada and Philippines to create a global standard and
          opportunity for it’s Bangladeshi office employees.
        </p>
      </section>
    </main>
  );
}
