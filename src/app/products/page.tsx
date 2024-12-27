import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'

export default function ProductListingPage() {
  return (
    <div className="container mx-auto px-5 py-8">
      <h1 className="lg:text-[26px] md:text-xl text-xl text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="block">
            <div className={`${product.color} rounded-lg p-4 transition-shadow hover:shadow-md`}>
              <div className="relative w-full lg:h-48 md:h-48 h-24 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2 className="lg:text-xl md:text-[17px] font-light mb-2">{product.name}</h2>
              <p className="text-green-600  text-[17px]">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

