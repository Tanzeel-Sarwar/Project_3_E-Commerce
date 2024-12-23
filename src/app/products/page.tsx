import Link from 'next/link'
import { products } from '@/lib/products'

export default function ProductListingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="block">
            <div className={`${product.color} rounded-lg p-4 dura transition-shadow hover:shadow-md`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
              <h2 className="text-[1.5rem] font-medium mb-2">{product.name}</h2>
              <p className="text-white/80">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

