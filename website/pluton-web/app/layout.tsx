import type { Metadata } from 'next'
import localFont from "next/font/local";
const ppNeue = localFont({ src: "../public/fonts/ppneue.woff2" });
import './globals.css'
import Header from './components/Header/Menu'


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
    <html className={ppNeue.className} lang="en">
      <body>
		<Header />
		{children}
		</body>
    </html>
  )
}
