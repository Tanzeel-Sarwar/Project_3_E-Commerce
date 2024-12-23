'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddToCartButton({  }: { productId: number }) {
  const [isAdding, setIsAdding] = useState(false)
  const router = useRouter()

  const handleAddToCart = () => {
    setIsAdding(true)
    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false)
      router.push('/cart')
    }, 1000)
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors disabled:bg-gray-300"
    >
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </button>
  )
}

