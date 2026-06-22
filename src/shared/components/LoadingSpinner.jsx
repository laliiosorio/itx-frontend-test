export default function LoadingSpinner() {
  return (
    <div role="status" className="flex items-center justify-center py-16">
      <span className="size-8 animate-spin rounded-full border-4 border-outline-variant border-t-primary" />
      <span className="sr-only">Loading products...</span>
    </div>
  )
}
