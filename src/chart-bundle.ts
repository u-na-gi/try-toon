import { Chart, registerables } from 'chart.js'

// Register all Chart.js components
Chart.register(...registerables)

// Make Chart available globally for the browser
if (typeof window !== 'undefined') {
  (window as any).Chart = Chart
}

export { Chart }
