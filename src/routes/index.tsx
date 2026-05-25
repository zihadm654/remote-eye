import HeroSection from "#/components/shadcn-space/blocks/hero-01/hero";
import Team from "#/components/shadcn-space/radix/blocks/team-01/team";
import Testimonial01 from "#/components/shadcn-space/radix/blocks/testimonial-02/testimonial";
import { createFileRoute } from "@tanstack/react-router";
import { Workflow } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <HeroSection />
      {/*<section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
        <p className="island-kicker mb-3">
          Remote Eye, Your personal security companion.
        </p>
        <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl">
          Remote Eye, Your Secure, Our concern.
        </h1>
        <p className="mb-8 max-w-2xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
          Remote Eye is your personal security companion, providing real-time
          monitoring and secure access to your devices, properties etc with 24/7
          support servailence.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
          >
            Contact Us
          </a>
          <a
            href="/about"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            Learn More
          </a>
        </div>
      </section>*/}
      <h1 className="text-center text-4xl font-bold my-8">
        Professional Values
      </h1>
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          [
            "Skill Development",
            "Remote Eye encourages constant skill development through information technology. Today's market demand is beyond the traditional academic education. Therefore, we must maintain a stable ecosystem where all information technology companies will stand together to empower the potential youth to level up the skills and take them to the global standard.",
          ],
          [
            "Hard Work",
            "There is a famous saying “Hard work beats talent, when talent doesn’t work hard”. Remote Eye does not practice “Modern Slavery” like most other BPO companies in Bangladesh. It does not encourage employees working after hours and such. Rather it motivates employees so they willingly preform their best at work.",
          ],
          [
            "Experience",
            "Remote Eye considers it's employees as the best asset. The more experience we gather, the more we expand into the global market with a wide area of services that include complete back office support, CRM maintenance, administrative and marketing assistance.",
          ],
        ].map(([title, desc], index) => (
          <article
            key={title}
            className="island-shell feature-card rise-in rounded-2xl p-5"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <h2 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
              {title}
            </h2>
            <p className="m-0 text-sm text-[var(--sea-ink-soft)]">{desc}</p>
          </article>
        ))}
      </section>

      <h1 className="text-center text-4xl font-bold my-8">Ethical Values</h1>

      <section className="mt-8 grid gap-4">
        {[
          [
            "Ethical Values",
            "We believe honesty is the key to success. We stay honest to our customers with our ultimate customer service. We also do regular counseling and discussion with our employees so they stay strong with the ethical values.",
          ],
          [
            "Sincerity",
            "Sincerity is a give and take process. As far customer support is concerned, we are sincere to our customers at our best. As far as employee benefits are concerned, we are sincere with our benefits at our best. End of the day what we realize, our employees are atomically sincere to the team and overall to the company because of this culture.",
          ],
          [
            "Dedication",
            "Remote Eye has its full dedication to make itself the industry leader with the highest level of productivity, professionalism and long term vision. Therefore each team members are enthusiastic to reach the common goal with a long term employment mentality.",
          ],
        ].map(([title, desc], index) => (
          <article
            key={title}
            className="island-shell feature-card rise-in rounded-2xl p-5 gap-4"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            {/*<Workflow className="mb-2 size-16 font-semibold text-[var(--sea-ink)] text-center" />*/}
            <div>
              <h2 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
                {title}
              </h2>
              <p className="m-0 text-sm text-[var(--sea-ink-soft)]">{desc}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="island-shell rise-in mt-8 rounded-2xl p-6">
        <h2 className="mb-2 text-2xl text-center font-bold">About Us</h2>
        <p>
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
      <section>
        <Team />
        <Testimonial01 />
      </section>
    </main>
  );
}
