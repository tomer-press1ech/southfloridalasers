export default function Loading() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-border" />
          <div className="absolute inset-0 rounded-full border-2 border-laser-blue border-t-transparent animate-spin" />
        </div>
        <p className="text-sm text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}
