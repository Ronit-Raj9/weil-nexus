"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Code2, Coins, Activity, ChevronRight, ShieldCheck, Settings2, FileCode2, Rocket } from "lucide-react"

export default function DeveloperPortal() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Developer Portal</h1>
              <p className="text-muted-foreground">Publish, manage, and monetize your agentic applets on WeilChain.</p>
            </div>
            <Button size="lg" className="gap-2">
              <Plus className="h-4 w-4" /> Register New Applet
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Sidebar Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Dev Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                      <div className="flex items-center gap-1.5 text-2xl font-bold text-primary">
                        <Coins className="h-5 w-5" /> 12,450.00
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                      +14%
                    </Badge>
                  </div>
                  <div className="pt-4 border-t space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Invocations</span>
                      <span className="font-medium">452,201</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Published Applets</span>
                      <span className="font-medium">4</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg. Reliability</span>
                      <span className="font-medium text-success">99.98%</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full bg-transparent">
                    Withdraw Earnings
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-between font-normal hover:bg-muted/50">
                    <div className="flex items-center gap-3">
                      <FileCode2 className="h-4 w-4 text-primary" /> WIDL Schema Builder
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between font-normal hover:bg-muted/50">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-4 w-4 text-primary" /> Security Best Practices
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between font-normal hover:bg-muted/50">
                    <div className="flex items-center gap-3">
                      <Settings2 className="h-4 w-4 text-primary" /> API Key Management
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Publishing Interface */}
            <div className="lg:col-span-2 space-y-8">
              <Tabs defaultValue="published" className="w-full">
                <TabsList className="bg-white border mb-6">
                  <TabsTrigger value="published">My Applets</TabsTrigger>
                  <TabsTrigger value="register">Register Applet</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>

                <TabsContent value="published" className="space-y-4 m-0">
                  {[
                    { name: "Market Data Oracle", invocations: "125,430", revenue: "6,271", status: "Verified" },
                    { name: "AI Sentiment Analyzer", invocations: "45,200", revenue: "6,780", status: "Verified" },
                    { name: "Risk Scoring Agent", invocations: "8,500", revenue: "850", status: "Pending" },
                  ].map((a, i) => (
                    <Card key={i} className="group">
                      <CardHeader className="py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <Code2 className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-base font-bold">{a.name}</CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge
                                  variant="outline"
                                  className={`text-[10px] ${a.status === "Verified" ? "text-success border-success/30 bg-success/5" : "text-amber-600 border-amber-200 bg-amber-50"}`}
                                >
                                  {a.status}
                                </Badge>
                                <span className="text-[11px] text-muted-foreground">{a.invocations} total calls</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right hidden sm:block">
                              <p className="text-sm font-bold flex items-center gap-1 justify-end">
                                <Coins className="h-3 w-3 text-primary" /> {a.revenue}
                              </p>
                              <p className="text-[10px] text-muted-foreground">Total Earned</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="group-hover:translate-x-1 transition-transform"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="register" className="m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Register New Applet</CardTitle>
                      <CardDescription>
                        Define your applet's metadata and WIDL interface to publish it on the marketplace.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">Applet Name</label>
                          <Input placeholder="e.g. Price Oracle v2" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">Category</label>
                          <Input placeholder="e.g. Oracle" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold">Description</label>
                        <textarea
                          className="w-full min-h-[100px] rounded-md border bg-muted/30 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="What does this applet do?"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-semibold">WIDL Schema (JSON)</label>
                          <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                            Load Template
                          </Button>
                        </div>
                        <textarea
                          className="w-full min-h-[200px] font-mono text-xs rounded-md border bg-muted/30 p-4 focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder='{ "inputs": [...], "outputs": [...] }'
                          defaultValue={JSON.stringify(
                            {
                              inputs: [{ name: "param1", type: "string" }],
                              outputs: [{ name: "result", type: "number" }],
                            },
                            null,
                            2,
                          )}
                        />
                      </div>

                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 flex gap-3">
                        <Rocket className="h-5 w-5 text-primary shrink-0" />
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          Once submitted, your applet will be scheduled for a security audit. Verified applets earn a
                          "Shield" badge and are prioritized in marketplace search results.
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="justify-end border-t bg-muted/10">
                      <Button className="gap-2">
                        Submit for Verification <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="analytics" className="m-0">
                  <Card className="flex flex-col items-center justify-center py-20 text-center">
                    <Activity className="h-12 w-12 text-muted-foreground mb-4 opacity-20" />
                    <h3 className="text-lg font-semibold">Advanced Analytics Coming Soon</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mt-2">
                      Deep-dive insights into latency, error rates, and user retention are currently being deployed to
                      Icarus v2.
                    </p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
