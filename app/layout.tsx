import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: 'Bronfood — Сервис заказа еды на вынос',
  description: 'Bronfood — цифровая платформа для предварительного заказа еды на вынос (самовывоз) из кофеен и заведений общественного питания.',
}

export const viewport: Viewport = {
  themeColor: '#3a2a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
