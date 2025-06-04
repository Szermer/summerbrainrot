'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center py-28 text-center lg:min-h-[80vh] lg:py-32">
      <div className="relative z-10 max-w-2xl">
        <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
          Something went wrong!
        </h1>
        <p className="text-muted-foreground mb-10 text-xl">
          We encountered an error. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-3 font-semibold transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}