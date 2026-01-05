"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Zap,
  Activity,
  Coins,
  ArrowUpRight,
  ArrowDownRight,
  Play,
  MoreVertical,
  ChevronRight,
  ExternalLink,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"

const executionData = [
  { name: "Mon", count: 12 },
  { name: "Tue", count: 18 },
  { name: "Wed", count: 15 },
  { name: "Thu", count: 25 },
  { name: "Fri", count: 32 },
  { name: "Sat", count: 20 },
  { name: "Sun", count: 28 },
]

const costData = [
  { name: "Mon", cost: 0.12 },
  { name: "Tue", cost: 0.18 },
  { name: "Wed", cost: 0.15 },
  { name: "Thu", cost: 0.25 },
  { name: "Fri", cost: 0.32 },
  { name: "Sat", cost: 0.2 },
  { name: "Sun", cost: 0.28 },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold">User Dashboard</h1>
              <p className="text-muted-foreground">Monitor your active workflows and execution performance.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-white">
                Export Report
              </Button>
              <Button>New Workflow</Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Total Executions</CardTitle>
                <Activity className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,284</div>
                <div className="flex items-center gap-1 mt-1 text-xs text-success font-medium">
                  <ArrowUpRight className="h-3 w-3" />
                  +12% from last week
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Active Workflows</CardTitle>
                <Zap className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  3 deployed on Icarus v2
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Tokens Spent</CardTitle>
                <Coins className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.8 WEIL</div>
                <div className="flex items-center gap-1 mt-1 text-xs text-destructive font-medium">
                  <ArrowDownRight className="h-3 w-3" />
                  -4% from last week
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  99.2%
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Excellent</div>
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground font-medium">
                  Only 2 failures in 24h
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-white border mb-6">
                  <TabsTrigger value="overview">Performance</TabsTrigger>
                  <TabsTrigger value="workflows">Workflows</TabsTrigger>
                  <TabsTrigger value="history">Execution History</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Execution Frequency</CardTitle>
                      <CardDescription>Daily volume of applet invocations across all workflows.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] pt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={executionData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: "#64748b" }}
                          />
                          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
                          <Tooltip
                            cursor={{ fill: "#f8fafc" }}
                            contentStyle={{
                              borderRadius: "8px",
                              border: "1px solid #e2e8f0",
                              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                            }}
                          />
                          <Bar dataKey="count" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Cost Analysis (WEIL)</CardTitle>
                      <CardDescription>Cumulative token expenditure for on-chain services.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] pt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={costData}>
                          <defs>
                            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--color-secondary)" stopOpacity={0.1} />
                              <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: "#64748b" }}
                          />
                          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
                          <Tooltip
                            contentStyle={{
                              borderRadius: "8px",
                              border: "1px solid #e2e8f0",
                              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="cost"
                            stroke="var(--color-secondary)"
                            fillOpacity={1}
                            fill="url(#colorCost)"
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="workflows" className="space-y-4 m-0">
                  {[
                    { name: "Autonomous Hedge Fund", status: "Active", nodes: 4, cost: "0.42 / day" },
                    { name: "Yield Optimizer v4", status: "Active", nodes: 3, cost: "0.15 / day" },
                    { name: "Governance Watcher", status: "Paused", nodes: 2, cost: "0.00 / day" },
                  ].map((w, i) => (
                    <Card key={i}>
                      <CardHeader className="py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-2 w-2 rounded-full ${w.status === "Active" ? "bg-success" : "bg-muted"}`}
                            />
                            <CardTitle className="text-base font-bold">{w.name}</CardTitle>
                            <Badge variant="outline" className="text-[10px]">
                              {w.nodes} Nodes
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Play className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-4 pt-0">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Est. Operating Cost</span>
                          <span className="font-medium flex items-center gap-1">
                            <Coins className="h-3 w-3 text-primary" />
                            {w.cost}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="history" className="m-0">
                  <Card>
                    <div className="divide-y">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <Activity className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-sm">Workflow Invocated: Hedge Fund</p>
                              <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                                0x{Math.random().toString(16).slice(2, 10)}...{Math.random().toString(16).slice(2, 6)}
                                <ExternalLink className="h-2 w-2" />
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-medium">Success</p>
                            <p className="text-[10px] text-muted-foreground">{i + 1} hours ago</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-between bg-white">
                    Top up Balance <Coins className="h-4 w-4 text-primary" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between bg-white">
                    Audit Active Nodes <Zap className="h-4 w-4 text-secondary" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between bg-white">
                    Developer Settings <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Recent Payments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "AI Oracle Fee", amount: "0.15", date: "Today" },
                    { label: "DEX Gas Subsidy", amount: "0.08", date: "Yesterday" },
                    { label: "Risk Scoring API", amount: "0.10", date: "2 days ago" },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <div className="flex flex-col">
                        <span className="font-medium">{p.label}</span>
                        <span className="text-[10px] text-muted-foreground">{p.date}</span>
                      </div>
                      <span className="font-bold text-primary">-{p.amount} WEIL</span>
                    </div>
                  ))}
                  <Button variant="link" className="w-full h-auto p-0 text-xs">
                    View all transactions
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground border-none">
                <CardHeader>
                  <CardTitle className="text-base">WeilChain Node</CardTitle>
                  <CardDescription className="text-primary-foreground/70">Connected to Mainnet Beta</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">142ms</p>
                      <p className="text-[10px] font-medium uppercase tracking-widest opacity-70">Latency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
