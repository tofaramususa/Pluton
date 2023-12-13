import type { Metadata } from 'next'
import localFont from "next/font/local";
const ppNeue = localFont({ src: "../public/fonts/ppneue.woff2" });
import './globals.css'


export const metadata: Metadata = {
  title: 'Pluton',
  description: 'Software Consultancy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ppNeue.className}>{children}</body>
    </html>
  )
}
