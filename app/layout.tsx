import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "World Hotel - Convenient, Smart, Quality Over Quantity",
  description:
    "Comfortable, strategic, and affordable accommodation for business, government, and leisure needs in Jakarta Barat.",
  generator: "next.js",
  icons: {
    icon: [
    ],
  
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
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
