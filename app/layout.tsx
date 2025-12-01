import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Ayurooms - Wellness Resorts and Retreats India | Ayurooms",
  description:
    "Ayurooms are the best resorts for Ayurvedic treatment, yoga, holistic health and wellness. We help with back pain, weight loss, skin care and stress. We will find the best resort option for you. Reach out today!",
  icons: {
    icon: [
      {
        url: "/ayurooms-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/ayurooms-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/ayurooms-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
