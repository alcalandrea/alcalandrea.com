import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  LayoutTemplate,
  Search,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function WorkastPage() {
  return (
    <div className="w-full bg-[#F9F7F5] font-sans text-[#333333]">
      {/* Hero Section */}
      <header className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
              Case Study
            </span>
            <h1 className="mb-6 font-serif text-4xl leading-tight font-bold text-primary md:text-5xl lg:text-6xl">
              Building a Fully Organic Inbound Growth Engine
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
              How we scaled traffic, brand demand, and leads for a SaaS platform
              using SEO, content, and partnerships—with zero paid spend.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white shadow-md">
                Oct 2022 - Jun 2023
              </span>
              <span className="rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary">
                SaaS B2B
              </span>
            </div>
          </div>

          {/* Role Card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="mb-6 font-serif text-xl font-bold text-primary">
              Project Scope
            </h3>
            <div className="space-y-6">
              <div>
                <p className="mb-1 text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Role
                </p>
                <p className="text-lg font-medium">Marketing Manager</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Company
                </p>
                <p className="text-lg font-medium">Workast</p>
                <p className="mt-1 text-sm text-gray-500">
                  A workflow and task management platform built for Slack teams.
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-bold tracking-wider text-gray-400 uppercase">
                  The Challenge
                </p>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="block h-1.5 w-1.5 min-w-1.5 rounded-full bg-primary"></span>
                    Highly competitive productivity landscape
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="block h-1.5 w-1.5 min-w-1.5 rounded-full bg-primary"></span>
                    Competitors with massive paid budgets
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="block h-1.5 w-1.5 min-w-1.5 rounded-full bg-primary"></span>
                    Need for sustainable, long-term brand demand
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Strategy Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold text-primary md:text-4xl">
              The Strategy: Durable Infrastructure
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              We shifted focus away from one-off campaigns to build a unified
              inbound system. The goal was to establish authority and capture
              intent without relying on ad spend.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Pillar 1 */}
            <div className="rounded-xl border border-gray-100 bg-[#F9F7F5] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                <Target size={20} />
              </div>
              <h3 className="mb-2 font-bold text-primary">
                Definition & Position
              </h3>
              <p className="text-sm text-gray-600">
                Established a clear Ideal Customer Profile (ICP) to guide
                messaging. Identified value differentiators to compete on
                &quot;best value&quot; rather than just features.
              </p>
            </div>
            {/* Pillar 2 */}
            <div className="rounded-xl border border-gray-100 bg-[#F9F7F5] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                <Search size={20} />
              </div>
              <h3 className="mb-2 font-bold text-primary">SEO Authority</h3>
              <p className="text-sm text-gray-600">
                Built a pipeline of mid-ranking keywords positioned to convert.
                Optimized site architecture and produced high-quality,
                intent-driven content.
              </p>
            </div>
            {/* Pillar 3 */}
            <div className="rounded-xl border border-gray-100 bg-[#F9F7F5] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                <Users size={20} />
              </div>
              <h3 className="mb-2 font-bold text-primary">Reach Expansion</h3>
              <p className="text-sm text-gray-600">
                Launched a template library to capture search volume and an
                affiliate program to turn users into growth partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: SEO & Content Data */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Core Engine
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary md:text-4xl">
            SEO & Content Performance
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Keyword Growth */}
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex items-start justify-between">
              <div className="rounded-lg bg-[#eef5f0] p-3 text-green-700">
                <TrendingUp size={24} />
              </div>
              <span className="rounded bg-green-50 px-2 py-1 text-xs font-bold text-green-700">
                +61% Total
              </span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-800">
              Keyword Growth
            </h3>
            <p className="mb-6 text-sm text-gray-500">
              Five-month growth in ranking keywords through targeted
              optimization.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-100 pb-2 text-sm">
                <span className="text-gray-500">Total Keywords</span>
                <span className="font-bold text-gray-800">4,838 → 7,778</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2 text-sm">
                <span className="text-gray-500">Top 3 Rankings</span>
                <span className="font-bold text-gray-800">66 → 109</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Top 10 Rankings</span>
                <span className="font-bold text-gray-800">265 → 338</span>
              </div>
            </div>
          </div>

          {/* Card 2: Organic Traffic */}
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex items-start justify-between">
              <div className="rounded-lg bg-[#eef5f0] p-3 text-green-700">
                <Users size={24} />
              </div>
              <span className="rounded bg-green-50 px-2 py-1 text-xs font-bold text-green-700">
                +38% Users
              </span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-800">
              Organic Traffic
            </h3>
            <p className="mb-6 text-sm text-gray-500">
              Aligning blog posts and landing pages with keyword intent drove
              quality users.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-100 pb-2 text-sm">
                <span className="text-gray-500">Monthly Users</span>
                <span className="font-bold text-gray-800">11.3K → 15.6K</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2 text-sm">
                <span className="text-gray-500">Sessions</span>
                <span className="font-bold text-gray-800">14.2K → 19.5K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Organic Share</span>
                <span className="font-bold text-gray-800">63.3% → 67.2%</span>
              </div>
            </div>
          </div>

          {/* Card 3: Content Production */}
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex items-start justify-between">
              <div className="rounded-lg bg-[#fdf2f2] p-3 text-primary">
                <FileText size={24} />
              </div>
              <span className="rounded bg-red-50 px-2 py-1 text-xs font-bold text-primary">
                Velocity
              </span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-800">
              Search Demand
            </h3>
            <p className="mb-6 text-sm text-gray-500">
              Collaborated with freelance writers to produce high-quality assets
              at scale.
            </p>
            <div className="mt-4">
              <div className="relative pt-1">
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-block text-xs font-semibold text-gray-600">
                    Nov 2022
                  </span>
                  <span className="inline-block text-xs font-semibold text-primary">
                    9k Clicks
                  </span>
                </div>
                <div className="mb-4 flex h-2 overflow-hidden rounded bg-gray-100">
                  <div
                    style={{ width: "70%" }}
                    className="flex flex-col justify-center bg-primary/40"
                  ></div>
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-block text-xs font-semibold text-gray-600">
                    Jan 2023
                  </span>
                  <span className="inline-block text-xs font-semibold text-primary">
                    10k Clicks
                  </span>
                </div>
                <div className="mb-4 flex h-2 overflow-hidden rounded bg-gray-100">
                  <div
                    style={{ width: "85%" }}
                    className="flex flex-col justify-center bg-primary/70"
                  ></div>
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-block text-xs font-semibold text-gray-600">
                    Mar 2023
                  </span>
                  <span className="inline-block text-xs font-semibold text-primary">
                    11k Clicks
                  </span>
                </div>
                <div className="flex h-2 overflow-hidden rounded bg-gray-100">
                  <div
                    style={{ width: "100%" }}
                    className="flex flex-col justify-center bg-primary"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Expansion (Templates & Affiliates) */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: Templates */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded bg-[#fff7ed] p-2 text-orange-600">
                  <LayoutTemplate size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary">
                  Templates Library
                </h3>
              </div>
              <p className="mb-8 text-gray-600">
                Developed a library of workflow templates embedded within
                solution pages to capture search intent. This drove a{" "}
                <span className="font-bold">
                  +32% increase in organic traffic
                </span>{" "}
                in just three months with zero paid spend.
              </p>

              <div className="rounded-xl border border-gray-100 bg-[#F9F7F5] p-6">
                <h4 className="mb-4 text-sm font-bold tracking-wide text-gray-800 uppercase">
                  Monthly Visits Growth
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-20 text-xs text-gray-500">
                      Oct &apos;22
                    </span>
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-white">
                      <div className="h-full w-[75%] bg-orange-300"></div>
                    </div>
                    <span className="w-12 text-xs font-bold text-gray-700">
                      3,820
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-20 text-xs text-gray-500">
                      Nov &apos;22
                    </span>
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-white">
                      <div className="h-full w-[85%] bg-orange-400"></div>
                    </div>
                    <span className="w-12 text-xs font-bold text-gray-700">
                      4,632
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-20 text-xs text-gray-500">
                      Dec &apos;22
                    </span>
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-white">
                      <div className="h-full w-[87%] bg-orange-500"></div>
                    </div>
                    <span className="w-12 text-xs font-bold text-gray-700">
                      4,716
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-20 text-xs text-gray-500">
                      Jan &apos;23
                    </span>
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-white">
                      <div className="h-full w-full bg-orange-600"></div>
                    </div>
                    <span className="w-12 text-xs font-bold text-gray-700">
                      5,050
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Affiliates */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded bg-[#eef2ff] p-2 text-indigo-600">
                  <Users size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary">
                  Affiliate & Brand
                </h3>
              </div>
              <p className="mb-8 text-gray-600">
                Launched an affiliate program to turn users and advocates into
                growth partners. This created a massive spike in Direct Traffic,
                signaling strong brand demand and word-of-mouth.
              </p>

              <div className="rounded-xl border border-indigo-100 bg-white p-8 shadow-sm">
                <div className="mb-6 grid grid-cols-2 gap-8">
                  <div>
                    <p className="mb-1 text-sm text-gray-500">
                      Direct Traffic (Q1)
                    </p>
                    <p className="text-2xl font-bold text-gray-400">33.1K</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-gray-500">
                      Direct Traffic (Q2)
                    </p>
                    <p className="text-3xl font-bold text-primary">55.6K</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div>
                    <span className="rounded bg-indigo-50 px-2 py-1 text-xs font-bold text-indigo-700">
                      +68% Growth
                    </span>
                    <p className="mt-2 text-xs text-gray-500">
                      Direct became largest channel (56% of sessions)
                    </p>
                  </div>
                  <ArrowUpRight className="text-indigo-300" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Impact Section */}
      <section className="mt-12 rounded-t-3xl px-6 py-20 text-primary">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Final Impact
            </h2>
            <p className="text-lg text-primary/80">
              Across two quarters, we built a self-sustaining engine that
              delivered consistent month-over-month growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-primary/25 bg-white p-6 backdrop-blur-sm">
              <p className="mb-2 text-3xl font-bold">181.8K</p>
              <p className="text-sm text-primary/70">Total Sessions</p>
            </div>
            <div className="rounded-lg border border-primary/25 bg-white p-6 backdrop-blur-sm">
              <p className="mb-2 text-3xl font-bold">85%</p>
              <p className="text-sm text-primary/70">
                Traffic from Organic + Direct
              </p>
            </div>
            <div className="rounded-lg border border-primary/25 bg-white p-6 backdrop-blur-sm">
              <p className="mb-2 text-3xl font-bold">+15%</p>
              <p className="text-sm text-primary/70">
                Increase in Organic Leads
              </p>
            </div>
            <div className="rounded-lg border border-primary/25 bg-white p-6 backdrop-blur-sm">
              <p className="mb-2 text-3xl font-bold">$0</p>
              <p className="text-sm text-primary/70">Paid Advertising Spend</p>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-white/20 pt-8 md:flex-row">
            <Link
              className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
              href="/clearspace"
            >
              Clearspace Case Study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
