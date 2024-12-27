'use client'

import Link from 'next/link'
import { ShoppingCart, User, Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMobileMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav ref={navRef} className="fixed border-b-2 border-gray-800 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-8 md:px-10 lg:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-gray-900 hover:text-gray-800 text-xl font-semibold mr-8" onClick={closeMobileMenu}>
            DriveHub
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <User size={20} />
          </button>
          <Link href="/cart" className="p-2 text-gray-600 hover:text-gray-900 transition-colors" onClick={closeMobileMenu}>
            <ShoppingCart size={20} />
          </Link>
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full">
          <Link href="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={closeMobileMenu}>
            Products    
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={closeMobileMenu}>
            About
          </Link>
        </div>
      )}
    </nav>
  )
}

