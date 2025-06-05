'use client';

export default function GlobalError({
  error, // eslint-disable-line @typescript-eslint/no-unused-vars
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Something went wrong!
            </h2>
            <button
              onClick={() => reset()}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#2545D3',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
