"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, Settings2, X } from "lucide-react"
import type { Applet } from "@/lib/mock-data"

export const AppletNode = memo(({ data, selected }: NodeProps<{ applet: Applet; onRemove: (id: string) => void }>) => {
  return (
    <div className={`group relative min-w-[240px] transition-all ${selected ? "scale-105" : ""}`}>
      <Handle type="target" position={Position.Left} className="!h-3 !w-3 !border-2 !border-primary !bg-white" />

      <Card
        className={`overflow-hidden border-2 transition-all ${selected ? "border-primary shadow-lg" : "border-border"}`}
      >
        <CardHeader className="bg-muted/30 p-3">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="outline" className="text-[10px] font-normal uppercase tracking-wider">
              {data.applet.category}
            </Badge>
            <button
              onClick={(e) => {
                e.stopPropagation()
                data.onRemove(data.applet.id)
              }}
              className="rounded-full p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
          <CardTitle className="mt-1 text-sm font-bold">{data.applet.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Price</span>
              <div className="flex items-center gap-1 font-semibold text-foreground">
                <Coins className="h-3 w-3 text-primary" />
                {data.applet.price}
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Status</span>
              <Badge variant="secondary" className="h-4 px-1 text-[9px] bg-success/10 text-success border-success/20">
                Ready
              </Badge>
            </div>
          </div>

          <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-md border border-dashed py-1.5 text-[10px] font-medium text-muted-foreground hover:border-primary hover:text-primary transition-all">
            <Settings2 className="h-3 w-3" /> Configure Inputs
          </button>
        </CardContent>
      </Card>

      <Handle type="source" position={Position.Right} className="!h-3 !w-3 !border-2 !border-secondary !bg-white" />
    </div>
  )
})

AppletNode.displayName = "AppletNode"
