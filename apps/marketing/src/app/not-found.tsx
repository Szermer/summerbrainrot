export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center py-28 text-center lg:min-h-[80vh] lg:py-32">
      <div className="relative z-10 max-w-2xl">
        <h1 className="from-foreground to-foreground/70 relative mb-6 bg-linear-to-br bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl">
          Page Not Found
        </h1>

        <p className="text-muted-foreground mb-10 text-xl">
          Sorry, we couldn't find the page you're looking for. The page might
          have been removed or the URL might be incorrect.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/"
            className="bg-primary hover:bg-primary/90 text-primary-foreground group flex min-w-[200px] items-center gap-2 rounded-lg px-8 py-3 font-semibold transition-colors"
          >
            ← Back to Home
          </a>
          <a
            href="/contact"
            className="border-input bg-background hover:bg-accent hover:text-accent-foreground min-w-[200px] rounded-lg border px-8 py-3 font-semibold transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
