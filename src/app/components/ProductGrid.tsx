'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
            <div className={`aspect-square rounded-lg ${product.color} mb-4 transition-all duration-200 group-hover:shadow-lg overflow-hidden`}>
              <div className="w-full h-full flex items-center justify-center p-6">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            <h3 className="text-gray-900 mb-1">{product.name}</h3>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

