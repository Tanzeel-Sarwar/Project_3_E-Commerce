import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { ShoppingCart, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'DriveHub | CarCraze',
  description: 'A Fueling your love for cars with news, reviews, and more.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full z-50 bg-white/80 border-b-2 border-gray-800 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-800 text-xl font-semibold">
                DriveHub
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
                Discovery
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <User size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ShoppingCart size={20} href="/cart"/>
              </button>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}

