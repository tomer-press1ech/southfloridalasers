"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="pt-20 min-h-screen flex items-center">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <div className="h-16 w-16 rounded-2xl bg-error/10 flex items-center justify-center mx-auto mb-6">
            <svg
              className="h-8 w-8 text-error"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4">Something Went Wrong</h1>
          <p className="text-text-secondary mb-8">
            We encountered an unexpected error. Please try again.
          </p>
          <Button onClick={() => reset()} size="md">
            Try Again
          </Button>
        </div>
      </Container>
    </div>
  );
}
