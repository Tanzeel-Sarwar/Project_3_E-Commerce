import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'
import { CartProvider } from '@/lib/CartContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f5f5]`}>
        <CartProvider>
          <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-emerald-600 text-xl font-semibold">
                  DriveHub
                </Link>
                <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Products
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <User size={20} />
                </button>
                <Link href="/cart" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <ShoppingCart size={20} />
                </Link>
              </div>
            </div>
          </nav>
          <div className="pt-16">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}

