import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-14 text-center">
      <h1 className=" lg:text-3xl md:text-2xl text-xl font-light mb-4">Thank You for Your Order!</h1>
      <p className="mb-12">Your order has been received and is being processed.</p>
      <Link href="/" className="bg-gray-800 text-white lg:px-6 md:px-6 px-4 py-3 rounded-full hover:bg-gray-600 transition-colors">
        Continue Shopping
      </Link>
    </div>
  )
}

