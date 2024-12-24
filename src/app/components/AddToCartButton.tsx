'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddToCartButton({ productId }: { productId: number }) {
  const [isAdding, setIsAdding] = useState(false)
  const router = useRouter()

  const handleAddToCart = () => {
    setIsAdding(true)
    // Simulate adding to cart
    setTimeout(() => {
      console.log(`Added product ${productId} to cart`)
      setIsAdding(false)
      router.push('/cart')
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

