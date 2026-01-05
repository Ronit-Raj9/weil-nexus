"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, ShoppingBag, PenTool, Code2, BookText, Wallet } from "lucide-react"

const navItems = [
  { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
  { name: "Composer", href: "/composer", icon: PenTool },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Developer", href: "/developer", icon: Code2 },
  { name: "Docs", href: "/docs", icon: BookText },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">WeilNexus</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                <item.icon className="size-4" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border bg-muted/50 text-xs font-medium">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WeilChain Mainnet</span>
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Wallet className="size-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  )
}
