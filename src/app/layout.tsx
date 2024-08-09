import 'dotenv/config'
import type { Metadata } from 'next'
import { Inter, Kode_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/shared'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';




export const metadata: Metadata = {
  title: 'Mairon Vilela',
  description: 'Generated by create next app',
}
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const KodeMono = Kode_Mono({
  variable: '--font-kode-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {


  return (
    <html lang="pt-BR" className={`${inter.variable} ${KodeMono.variable}`}>
      <body className={inter.className} >
        <Header />
        {children}


      </body>
    </html>
  )
}
