'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group cursor-pointer"
        >
          <Link href={`/products/${product.id}`} className="block">
            <div className={`aspect-square rounded-lg ${product.color} mb-4 transition-all duration-300 group-hover:shadow-lg overflow-hidden`}>
              <motion.div className="w-full h-full relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </div>
            <h3 className="text-gray-800 mb-2">{product.name}</h3>
            <p className="text-green-600">${product.price.toFixed(2)}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

