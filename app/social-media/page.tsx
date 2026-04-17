import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Lora } from "next/font/google"
import {
  ArrowRight,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Pin,
  Twitter,
  Youtube,
} from "lucide-react"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/ayurooms",
    handle: "/c/ayurooms",
    description: "Watch wellness videos, resort features, and healing experiences.",
    icon: Youtube,
  },
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/company/ayurooms",
    handle: "Ayurooms",
    description: "See the latest brand updates and wellness insights.",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ayurooms/",
    handle: "@ayurooms",
    description: "Wellness inspiration, retreat highlights, and healing journeys.",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ayurooms/",
    handle: "/ayurooms",
    description: "Follow Ayurooms updates, stories, and community posts.",
    icon: Facebook,
  },
  {
    name: "Twitter (X)",
    href: "https://twitter.com/Ayurooms",
    handle: "@Ayurooms",
    description: "Catch quick updates, announcements, and wellness conversations.",
    icon: Twitter,
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/ayurooms/",
    handle: "/ayurooms",
    description: "Browse curated wellness moodboards and travel inspiration.",
    icon: Pin,
  },
  {
    name: "Website",
    href: "https://www.ayurooms.com/",
    handle: "ayurooms.com",
    description: "Visit the official website to explore resorts and wellness stays.",
    icon: Globe,
  },
]

export const metadata: Metadata = {
  title: "Ayurooms Social Media",
  description: "Connect with Ayurooms and subscribe to the newsletter.",
}

export default function SocialMediaPage() {
  return (
    <main className={`${lora.className} min-h-screen bg-gradient-to-br from-[#f5fffe] via-[#fafbf8] to-[#fff9f0] px-4 py-12 sm:px-6 sm:py-16`}>
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <section className="overflow-hidden rounded-[2rem] border border-[#e8d5c4]/50 bg-white/70 shadow-xl shadow-[#7eccc4]/10 backdrop-blur-sm">
          <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
              <div className="mx-auto w-fit rounded-full border border-[#7eccc4]/30 bg-[#7eccc4]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#4f9e96] lg:mx-0">
                Stay Connected
              </div>

              <div className="space-y-4">
                <h1 className="mx-auto max-w-xl text-4xl font-semibold text-[#2a2a2a] sm:text-5xl lg:mx-0">
                  Subscribe to our newsletter and keep up with Ayurooms.
                </h1>
                <p className="mx-auto max-w-2xl text-lg leading-8 text-[#666666] lg:mx-0">
                  Explore our latest wellness stories, travel inspiration, and social channels in one place.
                </p>
              </div>

              <Link
                href="https://ayurooms.arevei.com"
                className="mx-auto inline-flex w-fit items-center gap-3 rounded-full bg-[#FF7A59] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#FF7A59]/25 transition-all hover:bg-[#ff6a45] hover:shadow-[#FF7A59]/35 lg:mx-0"
              >
                Subscribe to newsletter
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#ffffff] via-[#fff8f2] to-[#edf9f8] p-6 shadow-inner shadow-[#7eccc4]/10">
                <Image
                  src="/images/logo-color-2.png"
                  alt="Ayurooms"
                  width={320}
                  height={110}
                  className="h-auto w-56 sm:w-64"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#e8d5c4]/50 bg-white/75 px-6 py-8 shadow-lg shadow-[#7eccc4]/5 backdrop-blur-sm sm:px-8 sm:py-10">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff9866]">Social Media</p>
              <h2 className="text-2xl font-semibold text-[#2a2a2a] sm:text-3xl">Connect with Ayurooms online</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#666666]">
              Follow our official channels for wellness ideas, retreat updates, and fresh content.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {socialLinks.map(({ name, href, handle, description, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.5rem] border border-[#e8d5c4]/60 bg-gradient-to-br from-white to-[#fafbf8] p-5 transition-all hover:-translate-y-1 hover:border-[#7eccc4]/60 hover:shadow-lg hover:shadow-[#7eccc4]/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7eccc4]/12 text-[#4f9e96]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-[#2a2a2a]">{name}</h3>
                    <ArrowRight className="h-4 w-4 text-[#ff9866] transition-transform group-hover:translate-x-1" />
                  </div>
                 
                  <p className="text-sm leading-6 text-[#666666]">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
