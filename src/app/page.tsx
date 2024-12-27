import ProductGrid from '@/app/components/ProductGrid'
import Link from 'next/link'



export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bg-hero.jpg  ')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-[#dfdfdf] mb-4 ">Autosphere</h1>
          <p className="lg:text-lg text-[14px] md:text-[16px] mb-8 text-[#a2a8b3]">
            Your Ultimate Destination for Car Buying & Beyond
          </p>
          <a href="/products">
            <button className="bg-gray-800 text-white lg:text-lg text-sm lg:px-8 lg:py-3 px-5 py-3 rounded-full hover:bg-gray-500 hover:text-black  transition-color duration-500">
              Discover our collection
            </button>
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:px-4 md:px-5 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Products</h2>
          <ProductGrid />
        </div>
      </section>
    </main>
  )
}

