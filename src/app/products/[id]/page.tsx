import { products } from '@/lib/products'
import AddToCartButton from '@/app/components/AddToCartButton'
import { notFound } from 'next/navigation'
import Image from 'next/image'

type TParams = Promise<{ id: string[] }>;

export default async function ProductDetailPage({ params }: { params: TParams }) {
  const id = (await params).id[0] as unknown as string
  
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative w-full aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="lg:text-3xl md:text-3xl text-2xl font-light mb-3">{product.name}</h1>
          <p className="lg:text-xl md:text-xl text-lg text-green-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6 text-justify lg:text-[16px] md:text-[14px] text-sm">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}

