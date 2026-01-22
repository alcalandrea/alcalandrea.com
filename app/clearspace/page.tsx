import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Globe,
  Layers,
  Mail,
  Target,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clearspace Case Study",
};

export default function ClearspacePage() {
  return (
    <div className="min-h-screen bg-[#F9F7F5] font-sans text-[#333333]">
      {/* Hero Section */}
      <header className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
              Case Study
            </span>
            <h1 className="mb-6 font-serif text-4xl leading-tight font-bold text-primary md:text-6xl">
              Building Marketing from the Ground Up
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
              Establishing systems, launching channels, and connecting brand
              efforts to business outcomes for Clearspace.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white shadow-md">
                Jun 2024 - Dec 2025
              </span>
              <span className="rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary">
                Design-Build B2B
              </span>
            </div>
          </div>

          {/* Role Card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="mb-6 font-serif text-xl font-bold text-primary">
              Project Scope
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Role
                </p>
                <p className="font-medium">Marketing Manager (First Hire)</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Company
                </p>
                <p className="font-medium">
                  Clearspace (Toronto-based Design-Build)
                </p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Mandate
                </p>
                <p className="mt-1 text-sm font-medium text-gray-600">
                  Build marketing function from zero following a rebrand. No
                  formal strategy or systems existed prior to this role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary / "Connecting the dots" style section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-primary md:text-4xl">
            Laying the Foundation for Pipeline Growth
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            I joined Clearspace as the first marketing hire. My work has spanned
            strategy and execution across website, content, social media, and
            internal comms. By establishing scalable systems first, I&apos;ve
            driven triple-digit growth across channels and influenced{" "}
            <strong>$1M+ in project opportunities</strong>—all without
            additional software spend.
          </p>
        </div>
      </section>

      {/* Phase 1: Foundation */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-start gap-12 md:flex-row">
          <div className="md:w-1/3">
            <h2 className="mb-4 font-serif text-2xl font-bold text-primary">
              Phase 1: Foundation & Systems
            </h2>
            <p className="mb-6 text-gray-500 italic">June – December 2024</p>
            <p className="text-gray-700">
              The initial six months focused on building scalable marketing
              infrastructure, not just short-term growth. We utilized native
              tools to keep costs lean while establishing professional
              workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:w-2/3 md:grid-cols-2">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F9F7F5] text-primary">
                <Layers size={20} />
              </div>
              <h3 className="mb-2 font-bold text-primary">
                Tech Stack (Zero Spend)
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Website: Squarespace</li>
                <li>• Analytics: Native Platform</li>
                <li>• Email: Mailchimp</li>
                <li>• Social: Meta Native Tools</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F9F7F5] text-primary">
                <CheckCircle size={20} />
              </div>
              <h3 className="mb-2 font-bold text-primary">Content Workflows</h3>
              <p className="mb-2 text-sm text-gray-600">
                Created end-to-end pipelines: Photoshoot → Asset Creation →
                Approvals → Multi-channel Distribution.
              </p>
              <p className="text-sm text-gray-600">
                Defined brand voice and internal sourcing processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Results Grid - Mimicking the "Toolkit" section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Phase 2: Jan – Dec 2025
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary md:text-4xl">
              Execution, Growth & Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: ROI */}
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f0f9ff] text-blue-600">
                <Target size={24} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-primary">
                Business Impact
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Marketing efforts directly supported inbound demand and
                opportunity identification.
              </p>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-gray-800">$1M</span>
                  <span className="rounded bg-blue-50 px-2 py-1 text-xs font-bold text-blue-600">
                    Pipeline
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-2 text-xs text-gray-500">
                  <p>~50k sqft Opportunities</p>
                  <p>Source: Web, Social, Events</p>
                </div>
              </div>
            </div>

            {/* Card 2: Website */}
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef5f0] text-green-700">
                <Globe size={24} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-primary">
                Web Performance
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Strong engagement on high-intent pages signals qualified
                interest.
              </p>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-gray-800">26k</span>
                  <span className="rounded bg-green-50 px-2 py-1 text-xs font-bold text-green-600">
                    +139% Visits
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-2 text-xs text-gray-500">
                  <p>Unique Visitors: +145%</p>
                  <p>Page Views: +140%</p>
                </div>
              </div>
            </div>

            {/* Card 3: Social */}
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf2f2] text-primary">
                <Users size={24} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-primary">
                LinkedIn Growth
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Video and behind-the-scenes content resonated with professional
                audiences.
              </p>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-gray-800">4.3k</span>
                  <span className="rounded bg-green-50 px-2 py-1 text-xs font-bold text-green-600">
                    +2k New
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-2 text-xs text-gray-500">
                  <p>Video Engagement: 8.85%</p>
                  <p>Growth: 100% Organic</p>
                </div>
              </div>
            </div>

            {/* Card 4: Content */}
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#fff7ed] text-orange-600">
                <BarChart3 size={24} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-primary">
                Content Engine
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Built an owned content ecosystem from zero to translate
                technical info into trust.
              </p>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-gray-800">40+</span>
                  <span className="rounded bg-gray-50 px-2 py-1 text-xs font-bold text-gray-500">
                    Assets
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-2 text-xs text-gray-500">
                  <p>13 Project Case Studies</p>
                  <p>Avg Time on Page: 2-3m+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content / "Featured Projects" visual style */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h3 className="mb-8 font-serif text-2xl font-bold text-primary">
          Deep Dive: Content & Engagement
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Box 1 */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h4 className="mb-4 text-lg font-bold text-gray-800">
              Email Marketing Retention
            </h4>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F7F5] text-primary">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">46.5%</p>
                <p className="text-sm text-gray-500">Open Rate (+10.4% YoY)</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Strategy focused on informational snapshots rather than hard CTAs,
              building trust and keeping Clearspace top-of-mind for 500+
              subscribers.
            </p>
          </div>

          {/* Box 2 */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h4 className="mb-4 text-lg font-bold text-gray-800">
              Instagram Discovery
            </h4>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-[#F9F7F5] p-4 text-center">
                <p className="text-xl font-bold text-primary">+433%</p>
                <p className="text-xs text-gray-500">Reach</p>
              </div>
              <div className="rounded-lg bg-[#F9F7F5] p-4 text-center">
                <p className="text-xl font-bold text-primary">+284%</p>
                <p className="text-xs text-gray-500">Profile Visits</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Design-forward static content (Carousels: 14.68% engagement)
              significantly outperformed Reels, validating a visual-first
              strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / CTA Area */}
      <section className="mt-12 rounded-t-3xl bg-white px-6 py-20 text-primary">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
            Key Takeaways
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 text-left md:grid-cols-3">
            <div>
              <div className="mb-4 h-1 w-12 bg-primary/30"></div>
              <h4 className="mb-2 text-lg font-bold">Systems First</h4>
              <p className="text-sm text-primary/80">
                Prioritized scalable infrastructure before chasing short-term
                growth metrics.
              </p>
            </div>
            <div>
              <div className="mb-4 h-1 w-12 bg-primary/30"></div>
              <h4 className="mb-2 text-lg font-bold">Storytelling ROI</h4>
              <p className="text-sm text-primary/80">
                Connected brand narrative directly to measurable pipeline
                opportunities.
              </p>
            </div>
            <div>
              <div className="mb-4 h-1 w-12 bg-primary/30"></div>
              <h4 className="mb-2 text-lg font-bold">Native Growth</h4>
              <p className="text-sm text-primary/80">
                Delivered all results using native tools and organic strategies
                only.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-white/20 pt-8 md:flex-row">
            <Link
              className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
              href="/workast"
            >
              Workast Case Study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
