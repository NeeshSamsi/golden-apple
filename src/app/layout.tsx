import type { Metadata } from "next"
import { Schibsted_Grotesk } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-schibsted",
})
const ssonder = localFont({
  src: "./fonts/SSonderTRIAL-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-ssonder",
})

export const metadata: Metadata = {
  title: "Golden Apple Festival",
  description: "Neesh's harwork",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${schibsted.variable} ${ssonder.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
