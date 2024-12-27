'use client'

import { useState } from 'react'
import { useCart } from '@/lib/CartContext'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const { cartItems, removeFromCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    setIsProcessing(true)
    // Simulate checkout process
    setTimeout(() => {
      setIsProcessing(false)
      // Clear cart (you might want to implement this in your CartContext)
      cartItems.forEach(item => removeFromCart(item.id))
      // Redirect to a thank you page
      router.push('/thank-you')
    }, 2000)
  }

  return (
    <div className="container mx-auto px-12 py-8">
      <h1 className="lg:text-2xl md:text-2xl text-[22px] mb-8">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add some items before checking out.</p>
      ) : (
        <>
          <div className="mb-8">
            <h2 className="lg:text-[21px] md:text-[20px] text-lg font-light mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="lg:text-xl md:text-[18px] text-[16px] font-semibold mt-4">
              Total: ${total.toFixed(2)}
            </div>
          </div>
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="justify-self-center bg-gray-800 text-white lg:px-6 md:px-6 px-3 py-2 rounded-full hover:bg-gray-600 transition-colors disabled:bg-gray-400"
          >
            {isProcessing ? 'Processing...' : 'Complete Order'}
          </button>
        </>
      )}
    </div>
  )
}

