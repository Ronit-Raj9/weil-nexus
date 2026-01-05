"use client"

import type React from "react"
import { useState, useCallback, useRef } from "react"
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  type Connection,
  type Edge,
  type Node,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  Panel,
} from "reactflow"
import "reactflow/dist/style.css"
import { Coins, Settings2 } from "lucide-react" // Import Coins and Settings2 here
import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppletNode } from "@/components/composer/applet-node"
import { ExecutionModal } from "@/components/composer/execution-modal"
import { APPLETS, type Applet } from "@/lib/mock-data"
import { Play, Save, Trash2, Plus, Info, Search, Zap } from "lucide-react"

const nodeTypes = {
  applet: AppletNode,
}

const initialNodes: Node[] = [
  {
    id: "node-1",
    type: "applet",
    position: { x: 100, y: 150 },
    data: { applet: APPLETS[0], onRemove: () => {} },
  },
  {
    id: "node-2",
    type: "applet",
    position: { x: 450, y: 150 },
    data: { applet: APPLETS[1], onRemove: () => {} },
  },
]

const initialEdges: Edge[] = [{ id: "edge-1", source: "node-1", target: "node-2", animated: true }]

function ComposerInner() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [isExecModalOpen, setIsExecModalOpen] = useState(false)
  const [workflowName, setWorkflowName] = useState("My Autonomous Strategy")
  const [searchQuery, setSearchQuery] = useState("")

  const reactFlowWrapper = useRef<HTMLDivElement>(null)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges],
  )

  const onRemoveNode = useCallback(
    (id: string) => {
      setNodes((nds) => nds.filter((n) => n.id !== id))
      setEdges((eds) => eds.filter((e) => e.source !== id && e.target !== id))
    },
    [setNodes, setEdges],
  )

  const onDragStart = (event: React.DragEvent, applet: Applet) => {
    event.dataTransfer.setData("application/reactflow", JSON.stringify(applet))
    event.dataTransfer.effectAllowed = "move"
  }

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect()
      const appletData = JSON.parse(event.dataTransfer.getData("application/reactflow"))

      if (!reactFlowBounds || !appletData) return

      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      }

      const newNode: Node = {
        id: `node-${Date.now()}`,
        type: "applet",
        position,
        data: {
          applet: appletData,
          onRemove: onRemoveNode,
        },
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [setNodes, onRemoveNode],
  )

  const filteredApplets = APPLETS.filter(
    (a) =>
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const totalCost = nodes.reduce((sum, node) => sum + (node.data.applet?.price || 0), 0)

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b bg-white px-6 py-3">
        <div className="flex items-center gap-4">
          <Input
            value={workflowName}
            onChange={(e) => setWorkflowName(e.target.value)}
            className="w-64 font-semibold border-none bg-muted/50 focus-visible:ring-0 px-3"
          />
          <Badge variant="outline" className="gap-1.5 py-1">
            <Zap className="h-3 w-3 text-primary" /> Validated
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="mr-4 flex flex-col items-end text-right">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Est. Cost</span>
            <div className="flex items-center gap-1.5 font-bold text-primary">
              <Coins className="h-4 w-4" /> {/* Coins is now imported */}
              {totalCost.toFixed(2)} WEIL
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Save className="h-4 w-4" /> Save
          </Button>
          <Button size="sm" className="gap-2" onClick={() => setIsExecModalOpen(true)}>
            <Play className="h-4 w-4" /> Execute Workflow
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Applet Library */}
        <aside className="w-80 flex flex-col border-r bg-muted/10">
          <div className="p-4 border-b bg-white">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search applets..."
                className="pl-9 bg-muted/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
              Drag to canvas to compose
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredApplets.map((applet) => (
              <div
                key={applet.id}
                draggable
                onDragStart={(event) => onDragStart(event, applet)}
                className="cursor-grab active:cursor-grabbing group flex items-center justify-between gap-3 rounded-lg border bg-white p-3 shadow-sm hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex flex-col gap-1">
                  <Badge variant="outline" className="w-fit text-[9px] h-4 px-1">
                    {applet.category}
                  </Badge>
                  <span className="text-sm font-bold truncate max-w-[160px]">{applet.name}</span>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-primary">
                    <Coins className="h-3 w-3" />
                    {applet.price}
                  </div>
                  <Plus className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Canvas Area */}
        <div className="flex-1 relative" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background color="#f1f5f9" gap={20} />
            <Controls />
            <Panel position="bottom-right">
              <div className="flex flex-col gap-2 rounded-lg border bg-white/90 p-3 shadow-lg backdrop-blur-sm max-w-xs">
                <div className="flex items-center gap-2 font-semibold text-xs">
                  <Info className="h-3 w-3 text-primary" /> Composer Help
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  Connect outputs (right) to inputs (left). WeilNexus validates types and ensures WIDL compatibility in
                  real-time.
                </p>
              </div>
            </Panel>
          </ReactFlow>
        </div>

        {/* Right Sidebar - Properties/Config */}
        <aside className="w-80 border-l bg-white flex flex-col">
          <Tabs defaultValue="workflow" className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-2 rounded-none border-b bg-transparent h-12">
              <TabsTrigger
                value="workflow"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Workflow
              </TabsTrigger>
              <TabsTrigger
                value="node"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Config
              </TabsTrigger>
            </TabsList>

            <TabsContent value="workflow" className="flex-1 p-6 m-0">
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Description
                  </label>
                  <textarea
                    className="mt-2 w-full rounded-md border bg-muted/30 p-3 text-sm h-32 resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Describe what this workflow does..."
                    defaultValue="This strategy monitors Bitcoin price and social sentiment to determine when to execute decentralized swaps."
                  />
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Trigger Mode</span>
                    <Badge variant="secondary">On Event</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Icarus Engine</span>
                    <Badge variant="outline">v2.1 (Optimized)</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Execution Model</span>
                    <span className="font-medium">Parallel Agentic</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/5 gap-2"
                  >
                    <Trash2 className="h-4 w-4" /> Delete Workflow
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="node" className="flex-1 p-6 m-0 flex flex-col items-center justify-center text-center">
              <Settings2 className="h-12 w-12 text-muted-foreground mb-4 opacity-20" />{" "}
              {/* Settings2 is now imported */}
              <p className="text-sm text-muted-foreground">
                Select a node on the canvas to configure its WIDL parameters and behavioral constraints.
              </p>
            </TabsContent>
          </Tabs>
        </aside>
      </div>

      <ExecutionModal
        isOpen={isExecModalOpen}
        onClose={() => setIsExecModalOpen(false)}
        workflowName={workflowName}
        appletsCount={nodes.length}
        totalCost={totalCost}
      />
    </div>
  )
}

export default function ComposerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <ReactFlowProvider>
          <ComposerInner />
        </ReactFlowProvider>
      </Suspense>
    </div>
  )
}
