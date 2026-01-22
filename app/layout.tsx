import { Menu, X } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  applicationName: "Andrea Alcala Vasquez",
  authors: [
    {
      name: "Andrea Alcala Vasquez",
    },
    {
      name: "Max Monis",
      url: "https://maxmonis.com",
    },
  ],
  creator: "Andrea Alcala Vasquez",
  description: "Integrated Marketing Strategist",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  generator: "Next.js",
  keywords: [
    "Andrea Alcala",
    "Andrea Vasquez",
    "Andrea Alcala Vasquez",
    "Andrea Alcala Toronto",
    "Andrea Vasquez Toronto",
    "Andrea Alcala Vasquez Toronto",
    "Marketing Strategist Toronto",
    "Marketing Manager Toronto",
  ],
  publisher: "Vercel",
  referrer: "origin-when-cross-origin",
  title: {
    default: "Andrea Alcala Vasquez",
    template: "%s | Andrea Alcala Vasquez",
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white font-sans text-slate-800">
          <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
            {/* THE "STATE" CONTROLLER
              This hidden checkbox controls the open/closed state via CSS.
              id must match the htmlFor in the label below.
            */}
            <input
              className="peer hidden"
              id="mobile-menu-toggle"
              type="checkbox"
            />

            {/* MAIN HEADER CONTENT
              We use peer-checked on this container to toggle the visibility 
              of the specific icons (menu-icon vs close-icon) nested inside.
            */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 peer-checked:[&_.close-icon]:block peer-checked:[&_.menu-icon]:hidden">
              <div className="flex h-20 items-center justify-between">
                {/* Logo */}
                <div className="flex shrink-0 items-center">
                  <Link
                    className="text-2xl font-bold tracking-tight text-primary hover:text-secondary"
                    href="/"
                  >
                    Andrea
                    <span className="font-light">&nbsp;Alcala Vasquez</span>
                  </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center space-x-8 md:flex">
                  <Link
                    className="text-gray-600 transition-colors hover:text-secondary"
                    href="/#"
                  >
                    About
                  </Link>
                  <Link
                    className="text-gray-600 transition-colors hover:text-secondary"
                    href="/#expertise"
                  >
                    Expertise
                  </Link>
                  <Link
                    className="text-gray-600 transition-colors hover:text-secondary"
                    href="/#work"
                  >
                    Work
                  </Link>
                  <a
                    className="transform rounded-full bg-secondary px-6 py-2.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
                    href="mailto:alcalandrea@gmail.com"
                  >
                    Let&apos;s Connect
                  </a>
                </div>

                {/* Mobile Menu Toggle Button (Label) */}
                <div className="flex items-center md:hidden">
                  <label
                    htmlFor="mobile-menu-toggle"
                    className="cursor-pointer p-2 text-gray-600 transition-colors hover:text-secondary"
                  >
                    {/* Hamburger (Default Visible) */}
                    <Menu className="menu-icon block" size={28} />
                    {/* Close X (Default Hidden, shown via peer-checked logic on parent) */}
                    <X className="close-icon hidden" size={28} />
                  </label>
                </div>
              </div>
            </div>

            {/* MOBILE MENU DROPDOWN
              Visible only when the peer input is checked
            */}
            <div className="absolute left-0 z-40 hidden w-full border-t border-gray-100 bg-white shadow-lg peer-checked:block md:hidden">
              <div className="space-y-2 px-4 pt-2 pb-6">
                <Link
                  href="/#"
                  className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="/#expertise"
                  className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Expertise
                </Link>
                <Link
                  href="/#work"
                  className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Work
                </Link>
                <a
                  className="mt-4 flex w-full justify-center rounded-md bg-secondary px-6 py-3 font-medium text-white transition-colors hover:bg-primary"
                  href="mailto:alcalandrea@gmail.com"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </div>
          </nav>

          {children}

          {/* Footer */}
          <footer className="bg-primary py-20 text-white">
            <div className="mx-auto max-w-4xl px-4 text-center">
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
                Ready to integrate your efforts?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200">
                Whether you need a full-stack consultant for a project or a
                strategic partner for the long haul, let&apos;s start a
                conversation.
              </p>

              <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <a
                  className="rounded-full bg-white px-10 py-4 font-bold text-secondary transition-all duration-200 hover:-translate-y-0.5"
                  href="mailto:alcalandrea@gmail.com"
                >
                  Email Me
                </a>
                <a
                  className="flex items-center gap-2 leading-none transition-colors hover:underline"
                  href="https://www.linkedin.com/in/alcalandrea/"
                  rel="noopener"
                  target="_blank"
                >
                  <svg
                    className="-mt-1"
                    fill="none"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4.172h3.312V15H0V4.172zm12.707.669c.658.361 1.2.908 1.624 1.64s.637 1.481.637 2.245V15h-3.344V8.726c0-.17-.064-.361-.191-.573s-.244-.35-.35-.414c-.17-.106-.403-.159-.701-.159s-.531.042-.701.127l-1.369.669V15H4.968V4.172h3.344v.51c.658-.297 1.401-.435 2.229-.414s1.55.212 2.166.573zM1.656 0a1.6 1.6 0 0 1 1.178.478 1.6 1.6 0 0 1 .478 1.178c0 .467-.159.865-.478 1.194s-.711.494-1.178.494-.86-.165-1.178-.494S0 2.123 0 1.656A1.6 1.6 0 0 1 .478.478 1.6 1.6 0 0 1 1.656 0z"
                      fill="#ffffff"
                    />
                  </svg>{" "}
                  Connect on LinkedIn
                </a>
              </div>

              <div className="border-t border-[#aa7f62]/30 pt-10 text-sm text-gray-200">
                <p>
                  &copy; 2023-{new Date().getFullYear()} Andrea Alcala Vasquez.
                  All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
