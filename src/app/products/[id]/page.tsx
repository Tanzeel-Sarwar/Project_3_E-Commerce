import { products } from '@/lib/products'
import AddToCartButton from '@/app/components/AddToCartButton'
import { notFound } from 'next/navigation'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto object-contain rounded-lg" />
        </div>
        <div className="md:w-1/2 py-20">
          <h1 className="text-3xl font-medium mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  )
}

