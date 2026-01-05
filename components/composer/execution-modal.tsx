"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Loader2, Coins, AlertCircle, Play, ChevronRight } from "lucide-react"

interface ExecutionModalProps {
  isOpen: boolean
  onClose: () => void
  workflowName: string
  appletsCount: number
  totalCost: number
}

export function ExecutionModal({ isOpen, onClose, workflowName, appletsCount, totalCost }: ExecutionModalProps) {
  const [step, setStep] = useState<"confirm" | "executing" | "success">("confirm")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (step === "executing") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => setStep("success"), 500)
            return 100
          }
          return prev + 2
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [step])

  const handleExecute = () => setStep("executing")

  const resetAndClose = () => {
    onClose()
    setTimeout(() => {
      setStep("confirm")
      setProgress(0)
    }, 300)
  }

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-[425px]">
        {step === "confirm" && (
          <>
            <DialogHeader>
              <DialogTitle>Confirm Workflow Execution</DialogTitle>
              <DialogDescription>
                You are about to execute the <strong>{workflowName}</strong> workflow on WeilChain.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Applets involved</span>
                    <span className="font-medium">{appletsCount} agents</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated gas</span>
                    <span className="font-medium">0.0042 WEIL</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-semibold">Total Cost</span>
                    <div className="flex items-center gap-1.5 font-bold text-primary">
                      <Coins className="h-4 w-4" />
                      {(totalCost + 0.0042).toFixed(4)} WEIL
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-[12px] text-amber-800">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <p>This is a simulated execution for demo purposes. No real assets will be moved from your wallet.</p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={resetAndClose}>
                Cancel
              </Button>
              <Button onClick={handleExecute} className="gap-2">
                <Play className="h-4 w-4" /> Sign & Execute
              </Button>
            </DialogFooter>
          </>
        )}

        {step === "executing" && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <h3 className="mt-6 text-xl font-bold">Executing Workflow</h3>
            <p className="mt-2 text-sm text-muted-foreground">Processing Icarus runtime instructions...</p>
            <div className="mt-8 w-full max-w-[280px] space-y-2">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-[10px] font-medium text-muted-foreground">
                <span>{progress < 40 ? "Fetching Data" : progress < 80 ? "Running AI" : "Signing TX"}</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/20 text-success">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Execution Successful</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your workflow has been successfully processed on WeilChain.
            </p>
            <div className="mt-6 rounded-lg border bg-muted/30 p-4 w-full text-left">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Result Logs
                </span>
                <Badge variant="outline" className="text-[10px]">
                  TX-849204
                </Badge>
              </div>
              <div className="space-y-2 font-mono text-[11px] text-muted-foreground">
                <p className="flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" /> Oracle: Price BTC/USD 98,421.50
                </p>
                <p className="flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" /> AI: Sentiment Score 0.82 (Bullish)
                </p>
                <p className="flex items-center gap-2 text-primary">
                  <ChevronRight className="h-3 w-3" /> DEX: Swap 1.5 ETH for 4,201 USDC
                </p>
              </div>
            </div>
            <Button onClick={resetAndClose} className="mt-8 w-full">
              Close & View History
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
