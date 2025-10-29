import { encode } from '@byjohann/toon'

interface Address {
  street: string
  city: string
  country: string
  zipCode: string
}

interface Order {
  id: string
  date: string
  total: number
}

interface User {
  id: number
  name: string
  email: string
  age: number
  address: Address
  orders: Order[]
  tags: string[]
}

// Nested data structure
const users: User[] = [
  {
    id: 1,
    name: 'Alice Smith',
    email: 'alice@example.com',
    age: 28,
    address: {
      street: '123 Main St',
      city: 'Tokyo',
      country: 'Japan',
      zipCode: '100-0001'
    },
    orders: [
      { id: 'ORD-001', date: '2024-01-15', total: 150.50 },
      { id: 'ORD-002', date: '2024-02-20', total: 89.99 }
    ],
    tags: ['premium', 'verified']
  },
  {
    id: 2,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    age: 35,
    address: {
      street: '456 Oak Ave',
      city: 'Osaka',
      country: 'Japan',
      zipCode: '530-0001'
    },
    orders: [
      { id: 'ORD-003', date: '2024-01-10', total: 299.99 }
    ],
    tags: ['new']
  },
  {
    id: 3,
    name: 'Carol White',
    email: 'carol@example.com',
    age: 42,
    address: {
      street: '789 Pine Rd',
      city: 'Kyoto',
      country: 'Japan',
      zipCode: '600-0001'
    },
    orders: [
      { id: 'ORD-004', date: '2024-03-01', total: 450.00 },
      { id: 'ORD-005', date: '2024-03-15', total: 120.00 },
      { id: 'ORD-006', date: '2024-03-20', total: 75.50 }
    ],
    tags: ['premium', 'vip', 'long-term']
  }
]

const jsonStr = JSON.stringify(users)
const jsonPretty = JSON.stringify(users, null, 2)
const toonStr = encode(users)

console.log('\n' + '='.repeat(70))
console.log('🔷 NESTED JSON STRUCTURE TEST')
console.log('='.repeat(70))

console.log('\n📝 Original JSON (pretty):')
console.log(jsonPretty)
console.log(`\nJSON length (minified): ${jsonStr.length} characters`)
console.log(`JSON length (pretty): ${jsonPretty.length} characters`)

console.log('\n' + '='.repeat(70))
console.log('\n🎯 TOON Format:')
console.log(toonStr)
console.log(`\nTOON length: ${toonStr.length} characters`)

console.log('\n' + '='.repeat(70))
console.log('\n📊 Comparison:')

const reductionMinified = ((jsonStr.length - toonStr.length) / jsonStr.length * 100).toFixed(1)
const reductionPretty = ((jsonPretty.length - toonStr.length) / jsonPretty.length * 100).toFixed(1)

console.log(`
vs Minified JSON:
  JSON:  ${jsonStr.length} chars
  TOON:  ${toonStr.length} chars
  📉 Reduction: ${reductionMinified}%

vs Pretty JSON:
  JSON:  ${jsonPretty.length} chars
  TOON:  ${toonStr.length} chars
  📉 Reduction: ${reductionPretty}%
`)

console.log('='.repeat(70))
console.log('\n💡 Insights:')
console.log('- Nested objects (address) are handled')
console.log('- Arrays of objects (orders) are optimized')
console.log('- Simple arrays (tags) are preserved')
console.log('- Field names declared once per level')
console.log('')
