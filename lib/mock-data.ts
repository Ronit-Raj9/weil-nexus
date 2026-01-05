export interface Applet {
  id: string
  name: string
  category: "Oracle" | "AI" | "DEX" | "Security" | "Notification" | "Risk"
  description: string
  price: number
  verified: boolean
  author: string
  invocations: number
  revenue: number
  widl: {
    inputs: Array<{ name: string; type: string; description: string }>
    outputs: Array<{ name: string; type: string; description: string }>
    constraints: string[]
  }
}

export const APPLETS: Applet[] = [
  {
    id: "oracle-1",
    name: "Market Data Oracle",
    category: "Oracle",
    description: "Provides real-time price feeds for major crypto assets with cryptographic proof.",
    price: 0.05,
    verified: true,
    author: "WeilChain Labs",
    invocations: 125430,
    revenue: 6271.5,
    widl: {
      inputs: [
        { name: "assetPair", type: "string", description: "The trading pair to fetch (e.g., BTC/USD)" },
        { name: "source", type: "string", description: "Preferred exchange source" },
      ],
      outputs: [
        { name: "price", type: "number", description: "Current market price" },
        { name: "timestamp", type: "number", description: "UNIX timestamp of the data" },
      ],
      constraints: ["Max latency < 2s", "Precision 8 decimal places"],
    },
  },
  {
    id: "ai-1",
    name: "AI Sentiment Analyzer",
    category: "AI",
    description: "Neural network that processes social media and news feeds to determine market sentiment.",
    price: 0.15,
    verified: true,
    author: "NexusAI",
    invocations: 45200,
    revenue: 6780,
    widl: {
      inputs: [
        { name: "keyword", type: "string", description: "Asset or topic to analyze" },
        { name: "timeframe", type: "string", description: "Analysis period (1h, 4h, 1d)" },
      ],
      outputs: [
        { name: "score", type: "number", description: "Sentiment score from -1 to 1" },
        { name: "confidence", type: "number", description: "Model confidence score" },
      ],
      constraints: ["Model version v4.2", "GPU-accelerated inference"],
    },
  },
  {
    id: "dex-1",
    name: "DEX Swap Executor",
    category: "DEX",
    description: "Optimized swap executor that finds the best routes across multiple liquidity pools.",
    price: 0.08,
    verified: true,
    author: "WeilSwap",
    invocations: 89000,
    revenue: 7120,
    widl: {
      inputs: [
        { name: "tokenIn", type: "address", description: "Input token address" },
        { name: "tokenOut", type: "address", description: "Output token address" },
        { name: "amount", type: "number", description: "Amount to swap" },
      ],
      outputs: [
        { name: "txHash", type: "string", description: "On-chain transaction hash" },
        { name: "receivedAmount", type: "number", description: "Final received amount" },
      ],
      constraints: ["Max slippage < 1%", "Atomic execution"],
    },
  },
  {
    id: "security-1",
    name: "Security Audit Agent",
    category: "Security",
    description: "Real-time smart contract scanner that flags potential vulnerabilities before execution.",
    price: 0.25,
    verified: true,
    author: "SafeGuard",
    invocations: 12000,
    revenue: 3000,
    widl: {
      inputs: [
        { name: "contractAddress", type: "address", description: "Address to scan" },
        { name: "scanDepth", type: "number", description: "Depth of static analysis" },
      ],
      outputs: [
        { name: "riskLevel", type: "string", description: "High, Medium, Low" },
        { name: "findings", type: "array", description: "List of identified issues" },
      ],
      constraints: ["Static analysis only", "Gas limit 2M"],
    },
  },
  {
    id: "risk-1",
    name: "Risk Scoring Agent",
    category: "Risk",
    description: "Calculates portfolio risk scores based on historical volatility and correlation.",
    price: 0.1,
    verified: false,
    author: "QuantaMetrics",
    invocations: 8500,
    revenue: 850,
    widl: {
      inputs: [{ name: "portfolio", type: "json", description: "Current asset holdings" }],
      outputs: [
        { name: "var", type: "number", description: "Value at Risk score" },
        { name: "beta", type: "number", description: "Portfolio beta relative to market" },
      ],
      constraints: ["Historical data 365d"],
    },
  },
  {
    id: "notify-1",
    name: "Notification Agent",
    category: "Notification",
    description: "Cross-platform notification service for workflow events and execution alerts.",
    price: 0.02,
    verified: true,
    author: "WeilLink",
    invocations: 250000,
    revenue: 5000,
    widl: {
      inputs: [
        { name: "message", type: "string", description: "The alert message content" },
        { name: "recipient", type: "string", description: "Destination ID" },
      ],
      outputs: [{ name: "status", type: "string", description: "Delivery status" }],
      constraints: ["Global delivery", "Web3Auth compatible"],
    },
  },
]
