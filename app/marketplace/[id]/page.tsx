"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, ChevronLeft, Coins, ExternalLink, History, Code2, ShieldCheck, Plus, Play } from "lucide-react"
import Link from "next/link"
import { APPLETS } from "@/lib/mock-data"

export default function AppletDetailsPage() {
  const { id } = useParams()
  const applet = APPLETS.find((a) => a.id === id)

  if (!applet) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Applet not found</h1>
        <Button asChild className="mt-4">
          <Link href="/marketplace">Back to Marketplace</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/marketplace"
            className="mb-6 flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> Back to Marketplace
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge>{applet.category}</Badge>
                    {applet.verified && (
                      <Badge variant="secondary" className="gap-1 bg-primary/10 text-primary hover:bg-primary/20">
                        <ShieldCheck className="h-3 w-3" /> Verified
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-4xl font-bold">{applet.name}</h1>
                  <p className="mt-2 text-lg text-muted-foreground">{applet.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="lg" className="gap-2">
                    <Plus className="h-4 w-4" /> Add to Workflow
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                    <Play className="h-4 w-4" /> Invoke Applet
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="interface" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="interface" className="gap-2">
                    <Code2 className="h-4 w-4" /> WIDL Interface
                  </TabsTrigger>
                  <TabsTrigger value="history" className="gap-2">
                    <History className="h-4 w-4" /> History
                  </TabsTrigger>
                  <TabsTrigger value="about" className="gap-2">
                    <ShieldCheck className="h-4 w-4" /> Security
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="interface" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">WIDL Schema</CardTitle>
                      <CardDescription>Standardized interface definition for this applet.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="mb-3 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                          Inputs
                        </h4>
                        <div className="rounded-lg border divide-y bg-muted/20">
                          {applet.widl.inputs.map((input) => (
                            <div key={input.name} className="p-3 flex justify-between">
                              <div>
                                <code className="text-primary font-bold">{input.name}</code>
                                <p className="text-sm text-muted-foreground">{input.description}</p>
                              </div>
                              <Badge variant="outline" className="h-fit">
                                {input.type}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                          Outputs
                        </h4>
                        <div className="rounded-lg border divide-y bg-muted/20">
                          {applet.widl.outputs.map((output) => (
                            <div key={output.name} className="p-3 flex justify-between">
                              <div>
                                <code className="text-secondary font-bold">{output.name}</code>
                                <p className="text-sm text-muted-foreground">{output.description}</p>
                              </div>
                              <Badge variant="outline" className="h-fit">
                                {output.type}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                          Constraints
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {applet.widl.constraints.map((c) => (
                            <li key={c}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="history" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Invocation History</CardTitle>
                      <CardDescription>Recent on-chain executions of this applet.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                          >
                            <div>
                              <div className="flex items-center gap-2 font-mono text-sm text-primary">
                                0x{Math.random().toString(16).slice(2, 10)}...{Math.random().toString(16).slice(2, 6)}
                                <ExternalLink className="h-3 w-3" />
                              </div>
                              <p className="text-xs text-muted-foreground">Executed {i + 1} hours ago</p>
                            </div>
                            <Badge variant="outline" className="text-success border-success/30 bg-success/10">
                              Success
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="justify-center border-t bg-muted/30 py-3">
                      <Button variant="ghost" size="sm">
                        View all on WeilExplorer
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="about" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Security & Trust</CardTitle>
                      <CardDescription>Auditing information and developer reputation.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3 rounded-lg border p-4">
                        <ShieldCheck className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">WeilNexus Verified</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            This applet's code has been static-analyzed and manually audited to ensure it matches its
                            WIDL interface and contains no malicious logic.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg border p-4">
                        <CheckCircle2 className="h-5 w-5 text-success mt-1" />
                        <div>
                          <p className="font-semibold">Reputation Score: 98/100</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Based on invocation success rate, latency consistency, and developer history on WeilChain.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pricing & Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold flex items-center gap-2">
                      <Coins className="h-6 w-6 text-primary" />
                      {applet.price}
                    </div>
                    <span className="text-muted-foreground mb-1">/ invocation</span>
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Developer</span>
                      <span className="font-medium">{applet.author}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Invocations</span>
                      <span className="font-medium">{applet.invocations.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Revenue</span>
                      <span className="font-medium flex items-center gap-1">
                        <Coins className="h-3 w-3 text-primary" />
                        {applet.revenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg. Latency</span>
                      <span className="font-medium text-success">142ms</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-0">
                  <Button className="w-full" size="lg">
                    Add to Workflow
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download WIDL Spec
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Developer Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "This applet is designed for high-frequency workflows. We use a redundant set of 5 price sources to
                    ensure maximum accuracy even during volatile market conditions."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
