'use client'

import { useState } from 'react'
import { products } from '@/lib/products'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 1 },
  ])

  const cartProducts = cartItems.map(item => {
    const product = products.find(p => p.id === item.productId)
    return { ...product, quantity: item.quantity }
  })

  const total = cartProducts.reduce((sum, item) => sum + (item?.price || 0) * item.quantity, 0)

  return (
    <div className="container mx-auto px-24 py-16">
      <h1 className="text-2xl font-light mb-8">Your Cart</h1>
      {cartProducts.map(item => (
        <div key={item?.id} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <img src={item?.image} alt={item?.name} className="w-20 h-16 object-contain mr-10" />
            <div>
              <h2 className="text-lg font-light">{item?.name}</h2>
              <p className="text-gray-700 text-sm">${item?.price?.toFixed(2)} x {item?.quantity}</p>
            </div>
          </div>
          <button className="text-red-500 text-sm hover:text-red-700">Remove</button>
        </div>
      ))}
      <div className="mt-8">
        <p className="text-xl font-light">Total: ${total.toFixed(2)}</p>
        <button className="text-sm mt-4 bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-900 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

