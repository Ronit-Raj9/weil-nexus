"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Code2, Zap, ShieldCheck, Coins, ChevronRight, Workflow, Cpu, Layers } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

function DocsContent() {
  const categories = [
    {
      title: "Getting Started",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      links: ["Quick Start Guide", "What is WeilNexus?", "Platform Architecture"],
    },
    {
      title: "Applet Development",
      icon: <Code2 className="h-5 w-5 text-primary" />,
      links: ["WIDL Specification", "Building your first Applet", "Testing & Debugging"],
    },
    {
      title: "Execution Engine",
      icon: <Zap className="h-5 w-5 text-primary" />,
      links: ["Icarus Runtime", "Gas & Micro-fees", "Proof of Execution"],
    },
    {
      title: "Workflows",
      icon: <Workflow className="h-5 w-5 text-primary" />,
      links: ["Composer Basics", "Advanced Logic", "Workflow Persistence"],
    },
    {
      title: "Security",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      links: ["Audit Process", "Interface Sandboxing", "Threat Model"],
    },
    {
      title: "Monetization",
      icon: <Coins className="h-5 w-5 text-primary" />,
      links: ["Fee Structure", "Royalty Distribution", "Payout Schedule"],
    },
  ]

  return (
    <main className="flex-1 bg-white">
      {/* Search Hero */}
      <section className="bg-muted/30 py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Everything you need to build, publish, and automate agentic applets on the WeilChain ecosystem.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input className="pl-12 h-12 text-lg shadow-sm bg-white" placeholder="Search documentation..." />
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title} className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-lg">
                {cat.icon} {cat.title}
              </div>
              <div className="space-y-1">
                {cat.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="group flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link} <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Concepts */}
      <section className="py-16 border-t bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Core Concepts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">WIDL Specification</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Weil Interface Definition Language (WIDL) is a standardized way to describe an applet's interface,
                  allowing for seamless interoperability across the ecosystem.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Icarus Runtime</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A high-performance execution environment that chains agentic instructions atomically, ensuring complex
                  workflows execute reliably on-chain.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-bold mb-2">Verification Registry</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every applet in the marketplace undergoes static and manual auditing to guarantee that the logic
                  matches its published WIDL interface.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <DocsContent />
      </Suspense>
    </div>
  )
}
