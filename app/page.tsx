import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Boxes, Zap, Shield, Coins, Globe, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6" variant="secondary">
                Powered by WeilChain
              </Badge>
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance lg:text-6xl">
                Composable On-Chain Applets
              </h1>
              <p className="mb-8 text-xl text-muted-foreground text-pretty leading-relaxed">
                Discover, compose, and execute agentic workflows on WeilChain. Build powerful automation by connecting
                verified applets in a visual no-code interface.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/marketplace">
                    Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/composer">Start Composing</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="border-t bg-muted/30 py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">How It Works</h2>
                <p className="text-lg text-muted-foreground">Three simple steps to build powerful agentic workflows</p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>1. Discover Applets</CardTitle>
                    <CardDescription>
                      Browse verified on-chain applets in our marketplace. Each applet is transparent, audited, and
                      ready to use.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                      <Boxes className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle>2. Compose Workflows</CardTitle>
                    <CardDescription>
                      Drag and drop applets to create visual workflows. Connect outputs to inputs with zero code
                      required.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                      <Zap className="h-6 w-6 text-success" />
                    </div>
                    <CardTitle>3. Execute On-Chain</CardTitle>
                    <CardDescription>
                      Deploy your workflow to WeilChain. Every execution is verified, transparent, and permanently
                      recorded.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Core Features</h2>
                <p className="text-lg text-muted-foreground">
                  Everything you need to build the future of on-chain automation
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <Boxes className="mb-2 h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">No-Code Composition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Visual workflow builder with drag-and-drop interface. No programming required.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="mb-2 h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Execution Provenance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Full transparency with on-chain execution history and audit trails.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Coins className="mb-2 h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Micro-Fee Monetization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Developers earn tokens from every applet invocation across workflows.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Globe className="mb-2 h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Agentic Automation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Build autonomous systems that operate 24/7 without manual intervention.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Example Workflow */}
          <section className="border-t bg-muted/30 py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Example Workflow</h2>
                <p className="text-lg text-muted-foreground">See how applets connect to create powerful automation</p>
              </div>

              <Card className="mx-auto max-w-4xl">
                <CardHeader>
                  <CardTitle>Autonomous Trading Strategy</CardTitle>
                  <CardDescription>
                    A simple 3-applet workflow that monitors markets, analyzes sentiment, and executes trades
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-primary bg-primary/10">
                        <Globe className="h-8 w-8 text-primary" />
                      </div>
                      <span className="text-sm font-medium">Market Oracle</span>
                    </div>

                    <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground md:rotate-0" />

                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-secondary bg-secondary/10">
                        <Zap className="h-8 w-8 text-secondary" />
                      </div>
                      <span className="text-sm font-medium">AI Sentiment</span>
                    </div>

                    <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground md:rotate-0" />

                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-success bg-success/10">
                        <Coins className="h-8 w-8 text-success" />
                      </div>
                      <span className="text-sm font-medium">DEX Swap</span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-start gap-2 rounded-lg bg-muted p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This workflow automatically fetches market data, analyzes sentiment using AI, and executes swaps
                      on a DEX when conditions are met. Each applet is modular and can be reused in other workflows.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="border-t py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold">Ready to Build?</h2>
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  Start composing powerful agentic workflows today. No blockchain experience required.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/marketplace">Browse Applets</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/docs">Read Documentation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Suspense>
    </div>
  )
}
