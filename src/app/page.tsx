import ProductGrid from '@/app/components/ProductGrid'



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
          <h1 className="text-4xl md:text-5xl text-[#dfdfdf] mb-4 ">The nature candle</h1>
          <p className="text-lg mb-8 text-gray-600">
            All handmade with natural soy wax, perfect for all your relaxing moments
          </p>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-500 hover:text-black  transition-color duration-500">
            Discover our collection
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Products</h2>
          <ProductGrid />
        </div>
      </section>
    </main>
  )
}

