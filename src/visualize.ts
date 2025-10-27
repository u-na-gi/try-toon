import { encode } from '@byjohann/toon'
import { writeFileSync, mkdirSync } from 'fs'
import { existsSync } from 'fs'

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

const jsonStr: string = JSON.stringify(products)
const toonStr: string = encode(products)
const jsonLen: number = jsonStr.length
const toonLen: number = toonStr.length
const reduction: string = ((jsonLen - toonLen) / jsonLen * 100).toFixed(1)

// ASCII Bar Chart
console.log('\n📊 Token Usage Comparison\n')
console.log('JSON:')
const jsonBar: string = '█'.repeat(Math.floor(jsonLen / 3))
console.log(`${jsonBar} ${jsonLen} chars`)

console.log('\nTOON:')
const toonBar: string = '█'.repeat(Math.floor(toonLen / 3))
console.log(`${toonBar} ${toonLen} chars`)

console.log(`\n💡 Reduction: ${reduction}% fewer tokens\n`)

// Ensure public directory exists
if (!existsSync('public')) {
  mkdirSync('public')
}

// Generate HTML visualization with Tailwind CSS
const html: string = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TOON vs JSON Comparison</title>
    <link href="styles.css" rel="stylesheet">
</head>
<body class="bg-gray-100 min-h-screen py-8 px-4">
    <div class="max-w-6xl mx-auto">
        <div class="bg-white rounded-xl shadow-lg p-8">
            <h1 class="text-4xl font-bold text-gray-800 mb-2">TOON vs JSON Token Comparison</h1>
            <p class="text-gray-600 mb-8">Token-Oriented Object Notation による効率化</p>

            <div class="mb-10">
                <div class="relative h-96">
                    <canvas id="comparisonChart"></canvas>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div class="bg-gray-50 rounded-lg p-6 text-center">
                    <div class="text-sm text-gray-600 mb-2">JSON Length</div>
                    <div class="text-4xl font-bold text-blue-600 my-3">${jsonLen}</div>
                    <div class="text-sm text-gray-600">characters</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-6 text-center">
                    <div class="text-sm text-gray-600 mb-2">TOON Length</div>
                    <div class="text-4xl font-bold text-blue-600 my-3">${toonLen}</div>
                    <div class="text-sm text-gray-600">characters</div>
                </div>
                <div class="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-6 text-center text-white">
                    <div class="text-sm text-white/90 mb-2">Token Reduction</div>
                    <div class="text-4xl font-bold my-3">${reduction}%</div>
                    <div class="text-sm text-white/90">fewer tokens</div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <h3 class="text-white text-lg font-semibold mb-4">JSON Format</h3>
                    <pre class="text-gray-300 text-sm font-mono leading-relaxed">${jsonStr.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                </div>
                <div class="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <h3 class="text-white text-lg font-semibold mb-4">TOON Format</h3>
                    <pre class="text-gray-300 text-sm font-mono leading-relaxed">${toonStr.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                </div>
            </div>
        </div>
    </div>

    <script src="chart.js"></script>
    <script>
        const ctx = document.getElementById('comparisonChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['JSON', 'TOON'],
                datasets: [{
                    label: 'Character Count',
                    data: [${jsonLen}, ${toonLen}],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(59, 130, 246, 0.8)'
                    ],
                    borderColor: [
                        'rgba(239, 68, 68, 1)',
                        'rgba(59, 130, 246, 1)'
                    ],
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Character Count Comparison',
                        font: {
                            size: 18,
                            weight: 'bold'
                        },
                        color: '#1f2937'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + ' chars';
                            },
                            color: '#6b7280'
                        },
                        grid: {
                            color: '#e5e7eb'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#6b7280',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    </script>
</body>
</html>`

// Write HTML file to public directory
writeFileSync('public/index.html', html)
console.log('✅ Generated public/index.html')
console.log('   Open it in your browser to see the interactive chart!\n')
