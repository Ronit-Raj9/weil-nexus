import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Skeleton className="h-32 rounded-xl" />
        <Skeleton className="h-32 rounded-xl" />
        <Skeleton className="h-32 rounded-xl" />
        <Skeleton className="h-32 rounded-xl" />
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <Skeleton className="h-[400px] lg:col-span-2 rounded-xl" />
        <Skeleton className="h-[400px] rounded-xl" />
      </div>
    </div>
  )
}
