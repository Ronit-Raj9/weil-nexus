import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="size-6 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">W</span>
              </div>
              <span className="text-lg font-bold">WeilNexus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The universal storefront and workflow engine for agentic applets on WeilChain.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link href="/composer">Composer</Link>
              </li>
              <li>
                <Link href="/developer">Developer Portal</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs">Documentation</Link>
              </li>
              <li>
                <Link href="/docs/widl">WIDL Specification</Link>
              </li>
              <li>
                <Link href="/docs/icarus">Icarus Runtime</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Protocol</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              WeilNexus is a decentralized protocol built for the WeilChain ecosystem. Frontend Demo — No On-chain
              Execution. Hackathon Prototype.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
