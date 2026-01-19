import {
  ArrowRight,
  BarChart3,
  Compass,
  Megaphone,
  PenTool,
} from "lucide-react";
import Image from "next/image";

export default function RootPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pb-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-10">
            {/* Text Content */}
            <div>
              <h1 className="mb-6 text-6xl leading-tight font-bold text-primary">
                Connecting the Dots. <br />
                <span className="text-secondary">Driving Results.</span>
              </h1>
              <p className="mb-8 max-w-lg text-xl leading-relaxed text-gray-600">
                I&apos;m Andrea, an Integrated Marketing Strategist. I bridge
                the gap between creative vision and measurable ROI to build
                cohesive brand ecosystems that convert.
              </p>
              <div className="flex flex-col gap-4 text-center sm:flex-row">
                <a
                  className="rounded-full bg-secondary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary"
                  href="#work"
                >
                  Featured Projects
                </a>
                <a
                  className="rounded-full border-2 border-secondary bg-white px-8 py-4 font-semibold text-secondary transition-colors hover:bg-secondary/5"
                  href="#expertise"
                >
                  Core Philosophy
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="max-lg:w-50 max-lg:shrink-0 max-md:hidden">
              {/* Decorative Blob */}
              <div className="absolute top-0 right-0 -z-10 h-full w-full translate-x-10 -translate-y-10 transform rounded-full bg-blue/10 blur-3xl"></div>
              <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl lg:relative">
                <Image
                  alt="Andrea - Integrated Marketing Strategist"
                  className="h-auto w-full object-cover"
                  height={950}
                  src="/andrea.jpeg"
                  width={900}
                />
                {/* Floating Badge */}
                <div className="bottom-6 left-6 rounded-lg border-primary bg-white/90 px-6 py-4 shadow-lg backdrop-blur lg:absolute lg:border-l-4">
                  <p className="font-bold text-primary">10+ Years</p>
                  <p className="text-sm text-gray-600">Driving Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#aa7f62]/10 py-20" id="philosophy">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary">
            Marketing isn&apos;t a checklist. It&apos;s an ecosystem.
          </h2>
          <p className="text-xl leading-relaxed text-gray-700">
            Too often, brands treat channels in silos—SEO over here, social
            media over there, and email somewhere in between. As an Integrated
            Marketing Strategist,{" "}
            <span className="font-semibold text-secondary">
              I harmonize these efforts.
            </span>{" "}
            I ensure your brand message is consistent, your strategy is
            data-informed, and every touchpoint moves the customer closer to
            advocacy.
          </p>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="bg-white py-24" id="expertise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-3 text-sm font-bold tracking-widest text-blue uppercase">
              Expertise
            </h2>
            <h3 className="text-3xl font-bold text-primary lg:text-4xl">
              My Integrated Toolkit
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#8ea048]/10 text-[#8ea048] transition-colors group-hover:bg-[#8ea048] group-hover:text-white">
                <Compass size={28} />
              </div>
              <h4 className="mb-3 text-xl font-bold text-primary">
                Brand & Strategy
              </h4>
              <p className="leading-relaxed text-gray-600">
                Defining market positioning, audience personas, and the
                overarching &quot;big ideas&quot; that guide omnichannel
                execution.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#8ea048]/10 text-[#8ea048] transition-colors group-hover:bg-[#8ea048] group-hover:text-white">
                <PenTool size={28} />
              </div>
              <h4 className="mb-3 text-xl font-bold text-primary">
                Content Marketing
              </h4>
              <p className="leading-relaxed text-gray-600">
                Creating valuable, relevant storytelling that attracts audiences
                and drives organic growth across blogs, social, and video.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#8ea048]/10 text-[#8ea048] transition-colors group-hover:bg-[#8ea048] group-hover:text-white">
                <Megaphone size={28} />
              </div>
              <h4 className="mb-3 text-xl font-bold text-primary">
                Digital & Demand Gen
              </h4>
              <p className="leading-relaxed text-gray-600">
                Executing targeted paid social, SEM, and email automation
                sequences designed to nurture and convert leads.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#8ea048]/10 text-[#8ea048] transition-colors group-hover:bg-[#8ea048] group-hover:text-white">
                <BarChart3 size={28} />
              </div>
              <h4 className="mb-3 text-xl font-bold text-primary">
                Analytics & ROI
              </h4>
              <p className="leading-relaxed text-gray-600">
                Moving beyond vanity metrics to analyze real KPIs, ensuring
                continuous improvement and budget efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-gray-50 py-24" id="work">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-primary lg:text-4xl">
            Featured Projects
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="relative bg-gray-200">
                <Image
                  alt="B2B Tech Launch"
                  className="h-full w-full object-cover object-top-left grayscale transition-all duration-500 group-hover:grayscale-0"
                  height={600}
                  src="/clearspaces.png"
                  width={960}
                />
                <div className="absolute right-4 bottom-4 rounded bg-white/90 px-3 py-1 text-xs font-bold tracking-wider text-blue uppercase">
                  Design/Build
                </div>
              </div>
              <div className="p-8">
                <h3 className="mb-2 text-2xl font-bold text-primary">
                  The B2B Tech Launch
                </h3>
                <p className="mb-4 text-sm font-semibold text-secondary">
                  Role: Lead Strategist
                </p>
                <p className="mb-6 text-gray-600">
                  Integrated content and LinkedIn ad strategy resulted in a{" "}
                  <span className="font-bold text-gray-900">
                    45% increase in qualified demo requests
                  </span>{" "}
                  in Q3.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-bold text-primary transition-colors hover:text-secondary"
                >
                  View Case Study <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="relative bg-gray-200">
                <Image
                  alt="Ecommerce Rebrand"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  height={600}
                  src="/workast.webp"
                  width={960}
                />
                <div className="absolute right-4 bottom-4 rounded bg-white/90 px-3 py-1 text-xs font-bold tracking-wider text-blue uppercase">
                  B2B/B2C SaaS
                </div>
              </div>
              <div className="p-8">
                <h3 className="mb-2 text-2xl font-bold text-primary">
                  The E-commerce Rebrand
                </h3>
                <p className="mb-4 text-sm font-semibold text-secondary">
                  Role: Campaign Manager
                </p>
                <p className="mb-6 text-gray-600">
                  Synchronized email, organic social, and influencer outreach
                  drove{" "}
                  <span className="font-bold text-gray-900">$120k revenue</span>{" "}
                  during launch week.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-bold text-primary transition-colors hover:text-secondary"
                >
                  View Case Study <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative overflow-hidden bg-white py-24">
        {/* Background element */}
        <div className="absolute top-0 left-0 h-32 w-32 -translate-x-10 -translate-y-10 rounded-full bg-blue/10 blur-2xl"></div>
        <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-20 translate-y-20 rounded-full bg-[#aa7f62]/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-205 px-6 text-center">
          <div className="mb-6 flex justify-center text-secondary">
            <svg
              fill="currentColor"
              height="40"
              viewBox="0 0 24 24"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01705C7.91248 16 7.01705 16.8954 7.01705 18V21H2.01705V8.00002H6.01705V6.00002C6.01705 3.79088 7.80791 2.00002 10.017 2.00002H19.017C19.967 2.00002 20.8393 2.32998 21.5305 2.88514C21.8407 3.13426 22.017 3.5222 22.017 3.9216V21H14.017ZM9.01705 18V21H12.017V18H9.01705Z"
                opacity="0.5"
              />
            </svg>
          </div>
          <blockquote className="mb-8 text-lg leading-relaxed font-medium text-primary">
            <span className="text-3xl">
              Andrea has a rare combination of talents
            </span>{" "}
            with notable strengths in project management, print and digital
            graphic design, web technologies, data management, reporting,
            marketing automation and more. She did a great job on virtually
            everything I gave her across the spectrum of marketing disciplines
            over the year+ we worked together, and that&apos;s rare in a single
            role. She was organized, efficient and always ready for more.&nbsp;
            <span className="text-2xl">
              I&apos;d work with her again given the chance.
            </span>
          </blockquote>
          <div className="flex justify-center">
            <a
              className="group"
              href="https://www.linkedin.com/in/dallaskachan"
              rel="noopener"
              target="_blank"
            >
              <div className="flex items-center gap-3">
                <Image
                  alt="Dallas Kachan"
                  className="rounded-full"
                  height={100}
                  src="/dallas-kachan.jpeg"
                  width={100}
                />
                <cite className="text-left not-italic">
                  <span className="block font-bold text-gray-900 group-hover:underline">
                    Dallas Kachan
                  </span>
                  <span className="block text-gray-500">
                    VP Marketing | Edsby
                  </span>
                </cite>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
