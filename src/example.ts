import { encode } from '@byjohann/toon'

interface Product {
  id: number
  name: string
  price: number
  stock: number
  category: string
}

// Example data: List of products
const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    stock: 15,
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Mouse',
    price: 29.99,
    stock: 100,
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 79.99,
    stock: 50,
    category: 'Electronics'
  },
  {
    id: 4,
    name: 'Monitor',
    price: 299.99,
    stock: 25,
    category: 'Electronics'
  }
]

// Convert to TOON format
const toonFormat: string = encode(products)

console.log('Original JSON:')
console.log(JSON.stringify(products, null, 2))
console.log('\nJSON length:', JSON.stringify(products).length, 'characters')

console.log('\n' + '='.repeat(60))
console.log('\nTOON Format:')
console.log(toonFormat)
console.log('\nTOON length:', toonFormat.length, 'characters')

console.log('\n' + '='.repeat(60))
const reduction: string = ((JSON.stringify(products).length - toonFormat.length) / JSON.stringify(products).length * 100).toFixed(1)
console.log(`\nToken reduction: ${reduction}%`)
