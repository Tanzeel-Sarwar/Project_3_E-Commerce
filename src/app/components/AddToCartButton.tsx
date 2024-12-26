'use client'

import { useState } from 'react'
import { useCart } from '@/lib/CartContext'
import { Product } from '@/lib/products'

export default function AddToCartButton({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product)
    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors disabled:bg-emerald-300"
    >
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </button>
  )
}

