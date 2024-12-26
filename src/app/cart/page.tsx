'use client'

import { useCart } from '@/lib/CartContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()
  const router = useRouter()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleProceedToCheckout = () => {
    router.push('/checkout')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-light mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-light">{item.name}</h2>
                  <p className="text-emerald-600">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 px-2 py-1 border rounded mr-4"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-2xl font-light">Total: ${total.toFixed(2)}</p>
            <button 
              onClick={handleProceedToCheckout}
              className="mt-4 bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

