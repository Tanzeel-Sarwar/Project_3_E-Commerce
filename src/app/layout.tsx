import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/lib/CartContext'
import Layout from '@/app/components/layout'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DriveHub | CarCraze',
  description: 'Your Ultimate Destination for Car Buying & Beyond',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f5f5]`}>
        <CartProvider>
          <Layout />
          <div className="pt-16 min-h-screen">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}

