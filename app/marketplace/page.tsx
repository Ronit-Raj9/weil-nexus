"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, CheckCircle2, ChevronRight, Coins } from "lucide-react"
import Link from "next/link"
import { APPLETS } from "@/lib/mock-data"
import { Suspense } from "react"

function MarketplaceContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredApplets = APPLETS.filter((applet) => {
    const matchesSearch =
      applet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applet.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory ? applet.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(APPLETS.map((a) => a.category)))

  return (
    <main className="flex-1 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-bold">Applet Marketplace</h1>
          <p className="text-muted-foreground">
            Discover and integrate verified agentic applets into your WeilChain workflows.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filters */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search applets..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2 lg:flex-col">
                  <Button
                    variant={selectedCategory === null ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Applets
                  </Button>
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "secondary" : "ghost"}
                      className="justify-start"
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border bg-white p-4">
                <h3 className="mb-2 text-sm font-semibold">Verified Applets</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Verified applets have undergone code review and security auditing by the WeilNexus core team.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filteredApplets.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredApplets.map((applet) => (
                  <Card key={applet.id} className="group overflow-hidden transition-all hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="mb-2 flex items-center justify-between">
                        <Badge variant="outline" className="font-normal">
                          {applet.category}
                        </Badge>
                        {applet.verified && <CheckCircle2 className="h-4 w-4 text-primary" />}
                      </div>
                      <CardTitle className="line-clamp-1">{applet.name}</CardTitle>
                      <CardDescription className="line-clamp-2 h-10">{applet.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{applet.invocations.toLocaleString()}</span>{" "}
                        invocations
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between border-t bg-muted/50 py-3">
                      <div className="flex items-center gap-1.5 font-semibold">
                        <Coins className="h-4 w-4 text-primary" />
                        {applet.price} <span className="text-xs font-normal text-muted-foreground">/ invocation</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 group-hover:translate-x-1 transition-transform"
                        asChild
                      >
                        <Link href={`/marketplace/${applet.id}`}>
                          Details <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed bg-white p-12 text-center">
                <Search className="mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-semibold">No applets found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory(null)
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default function MarketplacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <MarketplaceContent />
      </Suspense>
    </div>
  )
}
